---
title: Okta SSO
---


## Integrate with Okta Single Sign-On

export const meta = {
  title: "Okta Single Sign-On",
  description: "Foxglove organizations can use Okta as authorization provider.",
};

> **This feature requires an Enterprise plan.**
> To enable SSO for your organization, please contact [sales@foxglove.dev](mailto:sales@foxglove.dev)

### Create an Okta application

To start using Okta as your authorization provider, first create a new app integration on your Okta dashboard:

- Sign-in method: OIDC - OpenID Connect
- Application type: Single-Page Application
- Grant type: Authorization code
- The sign-in redirect URI uses the following format: `https://console.foxglove.dev/{YOUR-FOXGLOVE-SLUG}/signin`, where your Foxglove organization slug is found under [Settings](https://console.foxglove.dev/settings)
- The sign-out redirect URI should be: `https://console.foxglove.dev/signin`
- Add `https://console.foxglove.dev` to "Trusted Origins"
- Access: note that "Federation Broker Mode" is [incompatible](https://help.okta.com/en-us/Content/Topics/Apps/apps-fbm-known-issues.htm) with Okta tiles

### Okta application tile

After the application is created, optionally, you can enable Okta application tile signin using these settings:

- Login initiated by: Either Okta or App
- Login flow: Redirect to app to initiate login (OIDC Compliant)
- The login URI is the same as the sign-in redirect URL in the previous step: `https://console.foxglove.dev/{YOUR-FOXGLOVE-SLUG}/signin`
- Application visibility: Display application icon to users
- This [Foxglove logo](/img/docs/data-platform/okta/foxglove-logo-okta.png) works well as a custom tile icon

### Foxglove OIDC configuration

Configure the Foxglove organization's [OIDC settings](https://console.foxglove.dev/settings/oidc):

>  ![Foxglove OIDC settings](/img/docs/data-platform/okta/screenshot-foxglove-settings.png)

You can find these values on the Okta dashboard:

- *Okta domain* comes in the format of `xxxxx.okta.com` and can be copied from the Okta dashboard's profile dropdown

  > ![Okta domain](/img/docs/data-platform/okta/screenshot-okta-domain.png)

- You can find the *Client ID* in the Applications list, below the app name

  > ![Okta clientId](/img/docs/data-platform/okta/screenshot-okta-clientid.png)

More details in the Okta Help Center: [Create OIDC app integrations](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_OIDC.htm)