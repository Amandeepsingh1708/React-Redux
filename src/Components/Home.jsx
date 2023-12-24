import React from "react";

const Home = () => {
    return (
        <div>
            <div >
            </div>
            <h1 style={{ textAlign: "center" }}>Home Components <span className="add-to-cart">
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
            </span></h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img
                        src="https://images.ctfassets.net/n36b8lzdmgnp/6flMYPMjJ0sZzNs16Fsqa/c525a3f838b0e62716631f003390506b/shutterstock_1736005427212121212.jpg"
                        alt=""
                        style={{ width: "200px" }}
                    />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <br />
                    <span>Price: $10000.00</span>
                </div>
                <div className="btn-wrapper">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
