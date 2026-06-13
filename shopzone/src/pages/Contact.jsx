import React from 'react'

function Contact() {
    return (
        <div className="page">
            <h1>Contact Us</h1>

            <form>

                <input
                    type="text"
                    placeholder="Name"
                />

                <input
                    type="email"
                    placeholder="Email"
                />

                <textarea
                    placeholder="Message"
                />

                <button>
                    Submit
                </button>

            </form>
        </div>
    );
}

export default Contact