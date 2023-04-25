export interface Cliente{
    cliente_codigo_interno: string,
    cliente_razon_social: string,
    cliente_nombre_comercial: string,
    persona_id: number,
    persona_nro_identificacion: string,
    persona_nombres: string,
    persona_apellidos: string,
    persona_fecha_nacimiento: Date,
    genero_id: number,
    genero: {
        genero_id: number,
        genero_nombre: string
     },
    tipo_persona_id: number,
    tipoPersona: {
        tipo_id: number,
        tipo_nombre: string,
        tipo_activo: boolean
    },
    tipo_identificacion_id: number,
    tipoIdentificacion: {
        tipo_identificacion_id: number,
        tipo_identificacion_nombre: string,
        tipo_identificacion_code: number,
        tipo_identificacion_activo: boolean
    },
    estado_civil_id: number,
    estadoCivil: {
        estado_id: number,
        estado_nombre: string,
        estado_activo: boolean
    }
}