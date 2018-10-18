const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-2gpdcj4tq376"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://vy5ko5j9yd.execute-api.us-east-1.amazonaws.com"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_21E1fcm1I",
    APP_CLIENT_ID: "7qhbd9v3efafsp70ntnvmof5ia",
    IDENTITY_POOL_ID: "us-east-1:64c573e8-6026-4fac-8d03-1593c7712278"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1ho4ki5rq7g6h"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://7l7s7n3mr9.execute-api.us-east-1.amazonaws.com"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_FHeuKXDXA",
    APP_CLIENT_ID: "3jas100d2ie5je5m4u0h5t059h",
    IDENTITY_POOL_ID: "us-east-1:2523063d-63b9-4ede-b98e-8bfd3e13bcff"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};