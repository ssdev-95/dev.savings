const Modal = {
    open() {
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    },
    delete() {
        //lmao
    },
    changeTheme() {
        //change theme -> rocket-seat
        // .cabecalho -> rocket-seat-dark;
        // .cards.total -> rocket-seat;
        // body -> dark-blue;
        // save button -> my-purple;
        // cancel button -> my-purple;
        // add transaction button ->  rocket-seat-dark;
        // add transaction button:hover -> rocket-seat;
    }
}