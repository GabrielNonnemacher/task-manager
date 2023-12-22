export interface Task {
    id?: number;
    name?: string;
    concluida?: boolean;
}

export class TaskDTO {
    static mapperDto(params: Task): Task {
        return {
            id: params.id,
            name: params.name,
            concluida: params.concluida
        };
    }
}
