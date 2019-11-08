import 'reflect-metadata';

function ColumnName(label: string) {
    return label;
}

export class RankingData {
    position: number;
    points: number;
    photo_url: string;
    full_name: string;
    postion_lasted: number;
    num_top_five: number;
    num_participations: number;
    best_position: number;
    num_best_position: number;

    // circuito;
    circuito_poinst: number;
    circuito_general_position: number;
    circuito_postion_lasted: number;
    circuito_best_pace: string;
    circuito_best_position: number;
    circuito_num_best_position: number;

    // info adicional, de momento no visible en la vista;
    circuito_race_id: number;
}
