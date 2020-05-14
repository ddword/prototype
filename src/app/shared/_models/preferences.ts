export class IModule {
    module: string;
    adminSettings: boolean;
    readOnly: boolean;
    update: boolean;
    delete: boolean;
    download: boolean;
}

export class ISettings {
    moduleRole: string;
    userRole: string;
    children: [IModule];
}
