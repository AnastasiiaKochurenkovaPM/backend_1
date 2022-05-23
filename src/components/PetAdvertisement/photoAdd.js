import React, { Component } from 'react';
import './Photo.css';

export class Photo extends Component {
    state={
        profileImg:'https://i.pinimg.com/236x/b7/fb/fb/b7fbfb42d40791d1a260fd0328c645bc.jpg',
        profileImg2:'https://i.pinimg.com/564x/35/04/aa/3504aac21731b68dc957aaa9486a3a84.jpg',
        profileImg3:'https://i.pinimg.com/564x/35/04/aa/3504aac21731b68dc957aaa9486a3a84.jpg'
    }

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                this.setState({profileImg: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])

    };
    imageHandler2 = (e) => {
        const reader2 = new FileReader();
        reader2.onload = () =>{
            if(reader2.readyState === 2){
                this.setState({profileImg2: reader2.result})
            }
        }
        reader2.readAsDataURL(e.target.files[0])
    };
    imageHandler3 = (e) => {
        const reader3 = new FileReader();
        reader3.onload = () =>{
            if(reader3.readyState === 2){
                this.setState({profileImg3: reader3.result})
            }
        }
        reader3.readAsDataURL(e.target.files[0])
    };

    render() {
        const { profileImg} = this.state
        const { profileImg2} = this.state
        const { profileImg3} = this.state
        return (
            <div>
                <div className="container">
                    <div className="img-holder">
                        <img src={profileImg} alt="" id="img" className="img" />
                    </div>
                    <input type="file" accept="image/*" name="image1" id="input" onChange={this.imageHandler} />
                    <div className="label">
                        <label className="image-upload" htmlFor="input">
                        </label>
                    </div>
                </div>
                <div className="smaller-download">
                    <div className="container2">
                        <div className="img-holder2">
                            <img src={profileImg2} alt="" id="img2" className="img2" />
                        </div>
                        <input type="file" accept="image2/*" name="image3" id="input2" onChange={this.imageHandler2} />
                        <div className="label2">
                            <label className="image-upload2" htmlFor="input2">
                            </label>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="img-holder2">
                            <img src={profileImg3} alt="" id="img3" className="img2" />
                        </div>
                        <input type="file" accept="image{/*" name="image2" id="input3" onChange={this.imageHandler3} />
                        <div className="label2">
                            <label className="image-upload2" htmlFor="input3">
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Photo;
