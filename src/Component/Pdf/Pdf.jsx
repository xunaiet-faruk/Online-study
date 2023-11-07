import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from '../../assets/Effectsofdigitalscorereportingandfeedbackonstudentslearning.pdf'

const Pdf = () => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }
    return (
        <div>
            <div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.apply(null,Array(numPages)).map((x,i)=>i + 1).map(page =>{return( 
                        
         <Page pageNumber = { page } renderTextLayer = { false} renderAnnotationLayer = { false} />


                    )


                    })}
                </Document>
               
            </div>
        </div>
    );

};

export default Pdf;