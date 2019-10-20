

export class BasePage {
    constructor () {
    }

    navigateToUrl (url: string) {
        browser.url(this.getUrl(url));
    }

    getUrl (url: string) {
        switch (url) {
        case 'RegistrationUsersUrl':
            var urlFromParams = browser.config.urls.registerUsers
                console.log("testkalur3:" + urlFromParams);
            return urlFromParams;
        default:
            return null;
        }
    }
}
