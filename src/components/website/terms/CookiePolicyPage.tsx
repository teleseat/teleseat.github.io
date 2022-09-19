/**
 * Cookie policy page
 * Url: /cookie-policy
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import {
    IonContent, IonLabel, IonRow
} from '@ionic/react'

/* css */
import '../HomePage.scss'

/* Components */
import PageProps from '../../common/PageProps'
import { APP_ROUTES } from '../../app/Routes'

const CookiePolicyPage: React.FC<PageProps> = (props) => {

    return (
        <IonContent id='cookiePolicyPage' className='terms'>
            <Helmet>
                <title>Teleseat Cookie Policy</title>
                <meta name='description' content='Learn about cookie policy' />
                <link rel='canonical' href={`https://teleseat.com${APP_ROUTES.COOKIE}`}/>
            </Helmet>
            <IonRow className='homePage--row mt-5'>
                <IonLabel>
                    <h1 className='f-bold-40 text-color mt-4'>COOKIE POLICY</h1>
                </IonLabel>
            </IonRow>
            <IonRow className='homePage--row mt-4 mb-5'>
                <IonLabel>
                    <h4 className='f-medium-15 text-color'>Last updated September 24, 2020</h4>
                    <p className='f-15 text-medium mt-5'>
                        This Cookie Policy explains how Teleseat Inc. ("<strong>Company</strong>", "<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>") uses cookies and similar technologies to recognize you when you visit our websites at <a href='https://teleseat.com' target='_blank' rel='noopener noreferrer'>https://teleseat.com</a>, ("<strong>Websites</strong>"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
                    </p>
                    <h4 className='f-medium-15 text-color mt-4'>
                        What are cookies?
                    </h4>
                    <p className='f-15 text-medium mt-3'>
                        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        Cookies set by the website owner (in this case, Teleseat Inc.) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
                    </p>
                    <h4 className='f-medium-15 text-color mt-4'>
                        Why do we use cookies?
                    </h4>
                    <p className='f-15 text-medium mt-3'>
                        We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes. This is described in more detail below.
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        The specific types of first and third party cookies served through our Websites and the purposes they perform are described below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):
                    </p>
                    <h4 className='f-medium-15 text-color mt-4'>
                        How can I control cookies?
                    </h4>
                    <p className='f-15 text-medium mt-3'>
                        You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href='http://www.aboutads.info/choices/' target='_blank' rel='noopener noreferrer'>http://www.aboutads.info/choices/</a> or <a href='http://www.youronlinechoices.com' target='_blank' rel='noopener noreferrer'>http://www.youronlinechoices.com</a>.
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        The specific types of first and third party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):
                    </p>
                    <h4 className='f-medium-15 text-color mt-4 underLine'>
                        Essential website cookies:
                    </h4>
                    <p className='f-15 text-medium mt-3'>
                        These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.
                    </p>
                    <table>
                        <tr><td>Name:</td><td>__tlbcpv</td></tr>
                        <tr><td>Purpose:</td><td>Used to record unique visitor views of the consent banner.</td></tr>
                        <tr><td>Provider:</td><td>.termly.io</td></tr>
                        <tr><td>Service:</td><td>Termly <a href='https://termly.io/our-privacy-policy/' target='_blank' rel='noopener noreferrer'>View Service Privacy Policy</a></td></tr>
                        <tr><td>Country:</td><td>United States</td></tr>
                        <tr><td>Type:</td><td>http_cookie</td></tr>
                        <tr><td>Expires in</td><td>1 year</td></tr>
                    </table>
                    <h4 className='f-medium-15 text-color mt-4 underLine'>
                        Unclassified cookies:
                    </h4>
                    <p className='f-15 text-medium mt-3'>
                        These are cookies that have not yet been categorized. We are in the process of classifying these cookies with the help of their providers.
                    </p>
                    <table>
                        <tr><td>Name:</td><td>m</td></tr>
                        <tr><td>Purpose:</td><td>_____</td></tr>
                        <tr><td>Provider:</td><td>m.stripe.com</td></tr>
                        <tr><td>Service:</td><td>______</td></tr>
                        <tr><td>Country:</td><td>United States</td></tr>
                        <tr><td>Type:</td><td>http_cookie</td></tr>
                        <tr><td>Expires in</td><td>1 year 11 months 29 days</td></tr>
                    </table>
                    <h4 className='f-medium-15 text-color mt-4 underLine'>
                        What about other tracking technologies, like web beacons?
                    </h4>
                    <p className='f-15 text-medium mt-3'>
                        Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Websites or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
                    </p>
                    <h4 className='f-medium-15 text-color mt-4 underLine'>
                        Do you use Flash cookies or Local Shared Objects?
                    </h4>
                    <p className='f-15 text-medium mt-3'>
                        Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or "LSOs") to, among other things, collect and store information about your use of our services, fraud prevention and for other site operations.
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the <a href='http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html' target='_blank' rel='noopener noreferrer'>Website Storage Settings Panel</a>. You can also control Flash Cookies by going to the <a href='http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html' target='_blank' rel='noopener noreferrer'>Global Storage Settings Panel</a> and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to "information" on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.
                    </p>
                    <h4 className='f-medium-15 text-color mt-4 underLine'>
                        Do you serve targeted advertising?
                    </h4>
                    <p className='f-15 text-medium mt-3'>
                        Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details or other details that directly identify you unless you choose to provide these.
                    </p>
                    <h4 className='f-medium-15 text-color mt-4 underLine'>
                        How often will you update this Cookie Policy?
                    </h4>
                    <p className='f-15 text-medium mt-3'>
                        We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        The date at the top of this Cookie Policy indicates when it was last updated.
                    </p>
                    <h4 className='f-medium-15 text-color mt-4 underLine'>
                        Where can I get further information?
                    </h4>
                    <p className='f-15 text-medium mt-3'>
                        If you have any questions about our use of cookies or other technologies, please email us at <a href='mailto:contact@teleseat.com'>contact@teleseat.com</a> or by post to:
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        Teleseat Inc.<br />
                        4125 Hopyard Rd<br />
                        Suite 225<br />
                        Pleasanton, CA 94588<br />
                        United States
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        This cookie policy was created using <a href='https://termly.io/en/products/cookie-consent-manager/?ftseo' target='_blank' rel='noopener noreferrer'>Termly’s Cookie Consent Manager</a>.
                    </p>
                </IonLabel>
            </IonRow>
        </IonContent>
    )
}

export default CookiePolicyPage
