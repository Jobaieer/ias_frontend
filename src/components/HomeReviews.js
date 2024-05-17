export default function HomeReviews(){
    return(
        <section className="container my-5">
            <h3 className="my-5 text-center">Reviews</h3>
            <div className="row mb-5">
                <div className="col-5 border p-2">
                    <h5>James Trash</h5>
                    <p>Nice & Clean</p>
                    <span className="text-warning">
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                    </span>
                </div>
                <div className="col-5 offset-2 border p-2">
                    <h5>GiGi Hadid</h5>
                    <p>Just Looking Like a Wow!</p>
                    <span className="text-warning">
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                    </span>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-5 border p-2">
                    <h5>Tahsan Khan</h5>
                    <p>Nice & Clean</p>
                    <span className="text-warning">
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                    </span>
                </div>
                <div className="col-5 offset-2 ms-auto border p-2">
                    <h5>Taylor Swift</h5>
                    <p>Just Looking Like a Wow!</p>
                    <span className="text-warning">
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                    </span>
                </div>
            </div>
            <div className="d-grid gap-2 col-2 mx-auto">
            <a href="..." className="float-none fs-5 btn btn-primary border" style={{'backgroundColor':'#0E2F4F'}}>More</a>
            </div>
        </section>
    );
}