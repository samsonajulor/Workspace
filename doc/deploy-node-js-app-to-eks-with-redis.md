## Complete Tutorial: Deploying a Node.js Application to EKS with Redis

### Prerequisites

- AWS CLI installed and configured.
- kubectl installed and configured.
- Docker installed.

### Step 1: Set Up ElastiCache for Redis

1. **Create a Redis Cluster:**
   - Go to the [AWS Management Console](https://aws.amazon.com/console/).
   - Navigate to the **ElastiCache** service.
   - Choose **Redis**.
   - Click on **Create**.
   - Configure your Redis cluster settings:
     - **Name**: Provide a name for your cluster.
     - **Node type**: Select the appropriate node type.
     - **Replicas**: Specify the number of replicas.
     - **Subnet group**: Ensure it is the same as the one used by your EKS cluster.
   - Click **Create**.

### Step 2: Configure Security Groups

1. **Find the Security Group of Your EKS Nodes:**
   - Navigate to the **EC2** service in the AWS Management Console.
   - Under **Instances**, find one of the instances that is part of your EKS cluster.
   - Note the Security Group associated with this instance.

2. **Modify the Security Group of Your ElastiCache Cluster:**
   - Navigate to the **ElastiCache** service.
   - Find your Redis cluster and click on its name.
   - Note the Security Group associated with the Redis cluster.
   - Go to the **EC2** service.
   - Under **Security Groups**, find the Security Group associated with your Redis cluster.
   - Edit the **Inbound rules** to allow traffic on port `6379` (default Redis port) from the Security Group of your EKS nodes.

### Step 3: Push Your Docker Image to ECR

1. **Create an ECR Repository:**
   - Navigate to the ECR service in the AWS Management Console.
   - Click on **Create repository**.
   - Configure your repository settings and click **Create repository**.

2. **Authenticate Docker to ECR:**
   - Use the AWS CLI to authenticate Docker to your Amazon ECR registry:

     ```sh
     aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 319945231254.dkr.ecr.us-east-1.amazonaws.com
     ```

3. **Create a Dockerfile:**
   - Create a `Dockerfile` in the root of your Node.js application directory:

     ```dockerfile
     # Use the official Node.js image as the base image
     FROM node:14

     # Set the working directory
     WORKDIR /usr/src/app

     # Copy package.json and package-lock.json files
     COPY package*.json ./

     # Install dependencies
     RUN npm install

     # Copy the rest of the application code
     COPY . .

     # Expose the application port
     EXPOSE 3000

     # Command to run the application
     CMD ["node", "index.js"]
     ```

4. **Build your Docker image:**

    ```sh
    docker build -t redis-test-server .
    ```

5. **Tag your Docker image:**

    ```sh
    docker tag redis-test-server:latest 319945231254.dkr.ecr.us-east-1.amazonaws.com/tezda-ecr:latest
    ```

docker run -p 3000:3000 redis-test-server

6. **Push your Docker image to ECR:**

    ```sh
    docker push 319945231254.dkr.ecr.us-east-1.amazonaws.com/tezda-ecr:latest
    ```

### Step 4: Create a Kubernetes Secret for ECR Access

1. **Create a Kubernetes secret to store your AWS credentials for accessing ECR:**

    ```sh
    kubectl create secret docker-registry regcred \
      --docker-server=319945231254.dkr.ecr.us-east-1.amazonaws.com \
      --docker-username=AWS \
      --docker-password=$(aws ecr get-login-password --region us-east-1) \
      --docker-email=samsonajulor@gmail.com
    ```

### Step 5: Create a Kubernetes Secret for Redis Connection

1. **Encode your Redis endpoint, port, and password (if any) using base64:**

    ```sh
    echo -n 'your-redis-endpoint' | base64
    echo -n '6379' | base64
    echo -n 'your-redis-password' | base64
    ```

2. **Create a `redis-secret.yaml` file:**

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: redis-secret
    type: Opaque
    data:
      redis-host: dGV6ZGEtcmVkaXMta3lnOGNoLnNlcnZlcmxlc3MudXNlMS5jYWNoZS5hbWF6b25hd3MuY29tOjYzNzk=
      redis-port: NjM3OQ==
      redis-password: cGFzc3dvcmQ=
    ```

3. **Apply the secret:**

    ```sh
    kubectl apply -f redis-secret.yaml
    ```

### Step 6: Deploy Your Application on EKS

1. **Create a Deployment YAML file (`deployment.yaml`):**

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: redis-test-server
    spec:
      replicas: 3
      selector:
        matchLabels:
          app: redis-test-server
      template:
        metadata:
          labels:
            app: redis-test-server
        spec:
          containers:
            - name: redis-test-server
              image: 319945231254.dkr.ecr.us-east-1.amazonaws.com/tezda-ecr:latest
              env:
                - name: REDIS_HOST
                  valueFrom:
                    secretKeyRef:
                      name: redis-secret
                      key: redis-host
                - name: REDIS_PORT
                  valueFrom:
                    secretKeyRef:
                      name: redis-secret
                      key: redis-port
                - name: REDIS_PASSWORD
                  valueFrom:
                    secretKeyRef:
                      name: redis-secret
                      key: redis-password
          imagePullSecrets:
            - name: regcred
    ```

2. **Create a Service YAML file (`service.yaml`):**

    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: redis-test-server-service
    spec:
      selector:
        app: redis-test-server
      ports:
        - protocol: TCP
          port: 80
          targetPort: 3000
      type: NodePort
    ```

3. **Deploy the application and service:**

    ```sh
    kubectl apply -f deployment.yaml
    kubectl apply -f service.yaml
    ```

### Step 7: Set Up Kubernetes Ingress

1. **Install an Ingress Controller:**

   If you don't have an ingress controller installed, you can use NGINX Ingress Controller. Follow the official guide to install it on your EKS cluster:

   ```sh
   kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/aws/deploy.yaml
   ```

2. **Create an Ingress Resource YAML file (`ingress.yaml`):**

    ```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: redis-test-server-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
    - host: ""
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: redis-test-server-service
                port:
                  number: 80
    ```

3. **Apply the Ingress resource:**

    ```sh
    kubectl apply -f ingress.yaml
    ```

### Step 8: Application Code Example (Node.js)

Ensure your application is configured to use the Redis connection details from the environment variables. Here is an example in Node.js:

```javascript
const redis = require('redis');

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  tls: {} // Use TLS if your Redis is configured for encryption
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});
```

### Verification and Troubleshooting

1. **Check Pod Logs:**

    ```sh
    kubectl logs -f <pod-name>
    ```

    Look for connection-related logs to ensure your application can connect to Redis.

2. **Network Connectivity:**
   - Ensure that the Security Groups are correctly configured.
   - Verify that there are no network ACLs blocking the traffic between your EKS nodes and the ElastiCache cluster.

3. **DNS Resolution:**
   - Ensure that the Redis endpoint is resolvable from within your EKS pods. You can use tools like `nslookup` or `dig` within a pod to check this.

By following these steps, you should be able to set up AWS ElastiCache to work with your EKS cluster successfully, deploy your Node.js application from a private ECR repository, and expose it using an ingress. If you encounter any issues, reviewing the security group settings and ensuring proper DNS resolution are good starting points for troubleshooting.