
import Banner from "../../Component/Bnner/Banner";
import Feathers from "../../Component/Bnner/Feathers/Feathers";
import Faq from "../../Component/Faqquestion/Faq";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ScroLL from "../../Scroolbar/ScroLL.JSX";

const Home = () => {
 
    return (
        <div>
            <MessengerCustomerChat
                pageId="202053042984596"
                appId="1019541442448361"
                
            />
            <div>
         <Banner></Banner>
         <Feathers></Feathers>
         <Faq></Faq>
         </div>
        
            <ScroLL/>
        </div>
    );
};

export default Home;