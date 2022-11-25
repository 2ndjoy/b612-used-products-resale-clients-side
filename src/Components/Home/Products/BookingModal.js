import React from 'react';

const BookingModal = () => {
    const handleBOoking = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const meetingLocation = form.meetingLocation.value;
        const userPhone = form.userPhone.value;


        console.log(userName, userEmail, productName, productPrice, meetingLocation, userPhone);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Name</h3>
                    <form onSubmit={handleBOoking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="userName" type="text" placeholder="Your Name" className="input w-full input-bordered" />

                        <input name="userEmail" type="email" placeholder="Email Address" className="input w-full input-bordered" />

                        <input name="productName" type="text" placeholder="Product Name" className="input w-full input-bordered" />

                        <input name="productPrice" type="text" placeholder="Price" className="input w-full input-bordered" />

                        <input name="meetingLocation" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />

                        <input name="userPhone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;