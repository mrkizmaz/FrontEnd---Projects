// unix zaman formatindaki tarih verisini kullanici dostu bir formata ceviren fonk

const formatDate = (unix_time) => {

    if (!unix_time || unix_time === 0) return null;

    const formatted = new Date(unix_time * 1000)

    return formatted.toLocaleTimeString("de", {
        hour: "2-digit",
        minute: "2-digit",
    });
};

export default formatDate;