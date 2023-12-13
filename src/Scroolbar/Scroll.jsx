import { useEffect } from "react";
import { PiArrowCircleUpBold } from "react-icons/pi";

const ScroLL = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <div  />

        
            <button className="rounded-full"
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                style={{
                    position: 'fixed',
                    padding: '10px',
                    fontSize: '20px',
                    bottom: '40px',
                    margin:"8px",
                    backgroundColor: '#0C9',
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                <PiArrowCircleUpBold className="text-xl"/>

            </button>
        </div>
    );
}

export default ScroLL;
