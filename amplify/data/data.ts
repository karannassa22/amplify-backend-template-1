import { defineData } from "@aws-amplify/backend";


export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: "apiKey",
        // API Key is used for a.allow.public() rules
        apiKeyAuthorizationMode: {
            expiresInDays: 30,
            defaultAuthorizationMode: 'userPool',
        },
    },
});
