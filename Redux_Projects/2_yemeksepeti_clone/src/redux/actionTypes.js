import axios from "axios";

const actionTypes = {
    REST_LOAD: "REST_LOAD",
    REST_SUCCESS: "REST_SUCCESS",
    REST_ERROR: "REST_ERROR",

    CARD_LOAD: "CARD_LOAD",
    CARD_SUCCESS: "CARD_SUCCESS",
    CARD_ERROR: "CARD_ERROR",
    CREATE_ITEM: "CREATE_ITEM",
    UPDATE_ITEM: "UPDATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
};

export default actionTypes;
