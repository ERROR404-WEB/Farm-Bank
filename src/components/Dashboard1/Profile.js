import React from 'react'
import Chart from './Chart';
import './Profile.css';
import Img from './FarmImg';
function Profile() {
  return (
    <>
      <div className="bodydiv">
                <div className="container">
                    <Img />
                    <div className="detaildiv">
                        <div className="f" classname="f1">
                            <b>NAME: ATMAKURI KIRAN</b>
                        </div>
                        <br />
                        <div className="f">
                            <b>AGE: 19 YEARS</b>
                        </div>
                        <br />
                        <div className="f">
                            <b>PHONE: 8919950595</b>
                        </div>
                        <br />
                        <div className="f">
                            <b>EXPERIENCE: 5 YEARS</b>
                        </div>
                        <br />
                        <div className="f" classname="f2">
                            <b>PROPERTY: 2 ACRES</b>
                        </div>
                    </div>
                </div>
                <div className="remaininginfo">
                    <div className="k1">
                        <b><center>BIDDING ROOMS</center></b>
                        <br />
                        <p>LIVE ROOMS:0</p>
                        <p>CLOSED ROOMS:3</p>

                    </div>
                    <div className="k1">
                        <b><center>COLLABRATIONS</center></b>
                        <br />
                        <p>collabrated with mani revanth</p>

                    </div>
                    <div className="k1">
                        <b><center>EARNINGS</center></b>
                        <br />
                        <p>LAST YEAR: ₹50000</p>
                        <p>CURRENT YEAR:----</p>

                    </div>
                </div>
                <div className="heading">
                    POSTS
                </div>
                <div className="posts">
                    <div className="p1">
                        <div className="images">
                            <img src="https://media.istockphoto.com/photos/green-field-lined-by-trees-on-clear-day-picture-id113145561?k=20&m=113145561&s=612x612&w=0&h=FkjvoWj3uqf9zzU7oCRcTuEQ9OTilfkpqYhmHxEmWa4=" className='postimg' />
                        </div>
                        <div className="content">
                            This is my field
                        </div>
                    </div>
                    <div className="p1">
                        <div className="images">
                            <img src="https://media.istockphoto.com/photos/green-field-lined-by-trees-on-clear-day-picture-id113145561?k=20&m=113145561&s=612x612&w=0&h=FkjvoWj3uqf9zzU7oCRcTuEQ9OTilfkpqYhmHxEmWa4=" className='postimg' />
                        </div>
                        <div className="content">
                            Greenary field
                        </div>
                    </div>
                    <div className="p1">
                        <div className="images">
                            <img src="https://media.istockphoto.com/photos/green-field-lined-by-trees-on-clear-day-picture-id113145561?k=20&m=113145561&s=612x612&w=0&h=FkjvoWj3uqf9zzU7oCRcTuEQ9OTilfkpqYhmHxEmWa4=" className='postimg' />
                        </div>
                        <div className="content">
                            This is my field
                        </div>
                    </div>
                    <div className="p1">
                        <div className="images">
                            <img src="https://media.istockphoto.com/photos/green-field-lined-by-trees-on-clear-day-picture-id113145561?k=20&m=113145561&s=612x612&w=0&h=FkjvoWj3uqf9zzU7oCRcTuEQ9OTilfkpqYhmHxEmWa4=" className='postimg' />
                        </div>
                        <div className="content">
                            Greenary field
                        </div>
                    </div>
                    <div className="p1">
                        <div className="images">
                            <img src="https://media.istockphoto.com/photos/green-field-lined-by-trees-on-clear-day-picture-id113145561?k=20&m=113145561&s=612x612&w=0&h=FkjvoWj3uqf9zzU7oCRcTuEQ9OTilfkpqYhmHxEmWa4=" className='postimg' />
                        </div>
                        <div className="content">
                            This is my field
                        </div>
                    </div>
                    <div className="p1">
                        <div className="images">
                            <img src="https://media.istockphoto.com/photos/green-field-lined-by-trees-on-clear-day-picture-id113145561?k=20&m=113145561&s=612x612&w=0&h=FkjvoWj3uqf9zzU7oCRcTuEQ9OTilfkpqYhmHxEmWa4=" className='postimg' />
                        </div>
                        <div className="content">
                            Greenary field
                        </div>
                    </div>
                </div>
            </div>
      <Chart />
    </>
  )
}

export default Profile