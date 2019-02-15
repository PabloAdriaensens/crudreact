import React, {Component} from 'react';

class Formulario extends Component {
    render() {
        return (
            <form className="col-8">
                <legend className="text-center">Crear Nuevo Post</legend>
                <div className="form-group">
                    <label>Título del Post</label>
                    <input type="text" className="form-control" placeholder="Titulo del Post"/>
                </div>
                <div className="form-group">
                    <label>Contenido: </label>
                    <textarea className="form-control" placeholder="Contenido..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        );
    }
}

export default Formulario;