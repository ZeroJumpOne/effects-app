

export class Usuario {

    constructor(
        public id: number,
        public email: string,
        public first_name: string,
        public last_name: string,
        public avatar: string) {}

}

export let usuarioEmpty: Usuario = new Usuario(0, '', '', '', '');
