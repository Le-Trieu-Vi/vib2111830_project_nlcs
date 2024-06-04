class ErrorController {
    handle(error, req, res, next) {
        if (error.code === 'P2002') {
            return res.status(400).json({
                status: "error",
                message: "Unique constraint"
            })
        }
        res.status(error.status || 500).json({
            message: error.message || "Internal server error",
        });
    }
}

export default new ErrorController();