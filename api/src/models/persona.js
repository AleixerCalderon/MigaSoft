class Persona {    
    constructor(){
        this.Personas = [];
    }    
    create = async(persona)=>{
        const newPersona = {...persona};
        this.Personas.push(newPersona);
        return newPersona;
    };
}
