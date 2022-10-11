const Notification = (props) => {
    const{from, to, date, transport, email} = props;
    return (
        <>
        <p>Спасибо!</p>
        <p>Как только билеты на машрут {from} - {to} ({transport}) на {date} появятся в наличии </p>
        <p>мы сразу же сообщим вам по адресу {email}</p>
        </>
    )
}
export default Notification;