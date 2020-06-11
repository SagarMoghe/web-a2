import React, {Component} from 'react';
import './Estimator.css';

class Estimator extends Component{
    render() {
        return(
            <div className='container'>
                <div className="jumbotron">
                    <h1 className="display-4">Cost Estimator</h1>
                    <p className="lead">This is a simple calculator that will help you canculate your fare.</p>

                        <p>Please note that this is an approximation of the cost and car owner charges may vary as per their discretion.</p>
                        <p className="lead">
                            <a className="float-sm-none float-xl-right disabled" href="#">Learn more</a>
                        </p>
                    <br/>
                    <hr className="my-4"/>
                    <form>
                        <div className="form-row ">
                            <div className="form-group col-md-6 ">
                                <label htmlFor="inputEmail4" className='float-left'>Email</label>
                                <input type="email" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6 ">
                                <label htmlFor="inputPassword4" className='float-left'>Password</label>
                                <input type="password" className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="inputAddress " className='float-left'>Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2" className='float-left'>Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2"
                                   placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity" className='float-left'>City</label>
                                <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState" className='float-left'>State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip" className='float-left'>Zip</label>
                                <input type="text" className="form-control" id="inputZip"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check float-left">
                                <input className="form-check-input " type="checkbox" id="gridCheck"/>
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Check me out
                                    </label>
                            </div>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary float-left">Sign in</button>
                    </form>
                </div>
            </div>
        );
    };
}

export default Estimator;
