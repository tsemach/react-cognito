export default {
  api: { 
    invokeUrl: "https://5bltcq602h.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: process.env.REACT_COGNITO_REGION,
    USER_POOL_ID: process.env.REACT_COGNITO_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_COGNITO_CLIENT_ID
  }
}