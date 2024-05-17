import Link from "next/link";

export default function Page() {

    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <img src="/thumbs/l.jpg" className="img-fluid" />
                        </div>
                        <div className="col-md-6 col-12">
                            <h3 className="mb-3">Log In</h3>
                                <div class="col-md-6 col-12 mb-3">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="text" class="form-control" placeholder="Email" />
                                    
                                </div>
                                <div class="col-md-6 col-12 mb-3">
                                    <label for="inputEmail4" class="form-label">Password</label>
                                    <input type="password" class="form-control" placeholder="**********" />
                                    
                                </div>
                                <div class="col-md-6 col-12 mb-3">
                                <button className="btn btn-secondary">Reset</button>
                                <button className="btn btn-warning text-white ms-2">Submit</button>
                                </div>
                                <p>
                                    <Link className="text-danger" href="/user/forgetpassword">Forget Password?</Link>
                            </p>
                                <p>If you have no registered account, <Link href="/user/signup">Signup here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}