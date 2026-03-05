import React from 'react'

const Testimonial = () => {
    return (
        <div>
            <h2 className='text-center my-5'>Testimonials</h2>
            <div className='container d-flex flex-column flex-md-row align-items-center justify-content-center gap-4'>
                <img src="/testimonial-img.svg" className='img-fluid testimonial-img' alt="..." />
                <p className='w-100 w-md-50 text-center text-md-start'>There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even slightly believable.</p>

            </div>
        </div>
    )
}

export default Testimonial
