import React from 'react';

function About(props) {
    return (
        <React.Fragment>
            <div className="container about-div">
                <h2>About Us</h2>
                <hr />
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src="../../images/butterflypuppets.jpg" />
                    </div>
                    <div className="col-md-6 col-lg-8 align-self-center">
                        <p>Springboard’s Work of Art: Business Skills for Artists is a professional development curriculum designed to teach business skills to artists in all disciplines — visual, performing and literary arts. Artists can take the whole series, customized combinations, or individual workshops that best suit their needs, and the curriculum is available for people interested in leading the workshops and offering professional development resources.</p>

                        <p>The Work of Art series has been taught by Springboard for the Arts at arts organizations, libraries and colleges in over 80 communities in the Upper Midwest, and replicated across the country by artists, arts organizations, and colleges and universities. After teaching the workshops to thousands of artists, we decided that we could have our biggest impact by offering this resource as freely and widely as possible. The Work of Art Toolkit is available for free digitally, now with a 2020 update! The update includes:</p>

                        <ul className="ul-about">
                            <li className="ml-3">Beautiful, inviting new layout and design from artist Cori Nakamura Lin</li>
                            <li className="ml-3">Expanded context and insights from working artists</li>
                            <li className="ml-3">New exercises to help build practical working skills</li>
                            <li className="ml-3">New section on Engaging Customers & Selling Your Work</li>
                            <li className="ml-3">Handy expanded glossary of terms for quick reference</li>
                        </ul>

                        <p>The Work of Art series is also available in Spanish! Translated in partnership with MACLA / Movimiento de Arte y Cultura Latino Americana, the toolkit has been translated with additional video content created by and for Latinx artists. Trabajo de Arte: Aptitudes de Negocios para Artistas esta disponible en español. Haga click aquí por el caja de herramientas.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;