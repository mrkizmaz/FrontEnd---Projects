const Error = ({ err }) => {
    return (
        <div className="error">
            <p>Bir sorun oluştu</p>

            <p>{err}</p>
        </div>
    );
};

export default Error;
