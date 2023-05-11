import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const ThankYou = () => {
    const location = useLocation();

    return (
        <div>
            <Nav pathName={"thank-you"} />
            <main>
                <div className="thank-you-main">
                    <div className="thank-you-text rounded-border-element colored-border-element">
                        <p>
                            Liebe(r)
                            {location.state?.firstName
                                ? " " + location.state.firstName
                                : " Kunde"}
                            ,
                            <br />
                            <br />
                            danke, dass Sie uns kontaktiert haben. Wir werden
                            uns bald bei Ihnen melden.
                        </p>
                    </div>
                    <div className="thank-you-button-container button-container">
                        <button type="button" className="btn btn-primary">
                            <a href="/">Weiter einkaufen</a>
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ThankYou;
