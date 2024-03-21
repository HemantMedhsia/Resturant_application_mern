import ErrorHandler from "../error/error.js";
import Reservation from "../models/reservationSchema.js";

const sendReservation = async (req, res, next) => {
    let { firstName, lastName, email, phone, date, time } = req.body;
    // console.log(req);
    
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill complete information below!", 400));
    }
    
    try {
        // Assuming Reservation.create expects an object with all fields
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time,
        });

        // Sending success response
        res.status(200).json({
            success: true,
            message: "Reservation Sent Successfully!!!",
        });
    } catch (error) {
        // Handling validation errors
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(","), 400));
        }
        // Handling other errors
        return next(error);
    }
}

export default sendReservation;
