import { useState } from 'react'

function Toggle() {
    const [key, setKey] = useState('$19.99')
    const [key2, setKey2] = useState('$24.99')
    const [key3, setKey3] = useState('$39.99')
    const [isChecked, setIsChecked] = useState(true)

    const switc = () => {
        setIsChecked(!isChecked);
        if (key === "$19.99" && key2 === "$24.99" && key3 === "$39.99") {
            setKey("$199.99");
            setKey2("$249.99");
            setKey3("$399.99");
        } else {
            setKey("$19.99");
            setKey2("$24.99");
            setKey3("$39.99");
        }
    };
    return (
        <div className="App">
            <div className="price">
                <h2>Our Pricing</h2>
                <div className="annual">
                    <h3>Annually</h3>
                    <div className="toggle">
                        <label className='switch'>
                            <input type='checkbox' onChange={switc} checked={isChecked} />
                            <span className='slider'></span>
                        </label>
                    </div>
                    <h3>Monthly</h3>
                </div>
            </div>
            <div className="container-div">
                <div className="first-div">
                    <h3 className="text-two">Basic</h3>
                    <h1 id='key' className="text">{key}</h1>
                    <hr />
                    <h3 className="text">500 GB Storage</h3>
                    <hr />
                    <h3 className="text">2 Users Allowed</h3>
                    <hr />
                    <h3 className="text">Send Up to 3 GB</h3>
                    <hr />
                    <button className="btn">Learn More</button>
                </div>
                <div className="second-div">
                    <h3 className="text-one">Professional</h3>
                    <h1 id='key2' className="text-one">{key2}</h1>
                    <hr />
                    <h3 className="text-one">1TB Storage</h3>
                    <hr />
                    <h3 className="text-one">5 Users Allowed</h3>
                    <hr />
                    <h3 className="text-one">Send Up to 3 GB</h3>
                    <hr />
                    <button className="btn-one">Learn More</button>
                </div>
                <div className="third-div">
                    <h3 className="text-two">Master</h3>
                    <h1 id='key3' className="text">{key3}</h1>
                    <hr />
                    <h3 className="text">2TB Storage</h3>
                    <hr />
                    <h3 className="text">10 Users Allowed</h3>
                    <hr />
                    <h3 className="text">Send Up to 3 GB</h3>
                    <hr />
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Toggle;
