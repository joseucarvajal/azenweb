import * as ZCommon from "../zcommon";
import {

    //Models
    ZMenuItemModel,
    ZRecursoViewModel,
    ZReferenciaViewModel,

    //Utils
    EntityMap,
    EntityNormalizedObj,
    IZAplState,
    IZPantex,

} from "../zcommon";

import * as ZMenu from '../zmenu';

import {
    ActionTypes,
} from './actionTypes';
import { ResultadoAction } from "../zutils";

export namespace DTO {
    export class DespacharOpcionMenuParamsDTO {
        tipoRecurso: ZCommon.Constants.TipoRecurso;
        idRecurso: string;
        zrecursoViewModelEntityMapOld: EntityMap<ZRecursoViewModel>;
    }
}

export namespace Actions {

    export namespace ZPantexModule {

        export const ponerAlTope = (zPantex: IZPantex): ActionTypes.ZPantexModule.Action => ({
            type: ActionTypes.ZPantexModule.PONER_AL_TOPE,
            zPantex
        });
    }




    




    export const despacharOpcionMenu = (zmenuItemModel: ZMenuItemModel): ActionTypes.Action => ({
        type: ZMenu.ActionTypes.DESPACHAR_OPCION_MENU,
        zmenuItemModel: zmenuItemModel
    });

    export const cerrarVentanaRecurso = (zRecursoViewModel: ZRecursoViewModel): ActionTypes.Action => ({
        type: ActionTypes.CERRAR_VENTANA_RECURSO,
        zrecursoViewModel: zRecursoViewModel
    });

    export const abrirVentanaZoom = (zreferenciaViewModel: ZReferenciaViewModel): ActionTypes.Action => ({
        type: ActionTypes.ABRIR_VENTANA_ZOOM,
        zreferenciaViewModel: zreferenciaViewModel
    });
}