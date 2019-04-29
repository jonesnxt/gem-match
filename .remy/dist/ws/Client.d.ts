import * as WebSocket from 'ws';
import { Server } from './Server';
import { FileManager } from './FileManager';
import { FilesystemManager } from './FilesystemManager';
import { PtyManager } from './PtyManager';
import { UserProfile } from './model/UserProfile';
import { ClientState } from './model/ClientState';
import { Color } from './model/Color';
export declare class Client {
    private readonly server;
    private readonly ws;
    private readonly filesystemManager;
    private readonly fileManager;
    private readonly ptyManager;
    readonly clientId: string;
    readonly sessionId: string;
    readonly userProfile: UserProfile;
    readonly isController: boolean;
    readonly color: Color;
    private numPingsSent;
    private pingInterval;
    private editorSelection?;
    constructor(server: Server, ws: WebSocket, filesystemManager: FilesystemManager, fileManager: FileManager, ptyManager: PtyManager, clientId: string, sessionId: string, userProfile: UserProfile, isController: boolean, color: Color);
    readonly clientState: ClientState;
    onConnect(): Promise<void>;
    onMessage(message: string): Promise<void>;
    sendMessage(message: object): Promise<any>;
    setSelection(path: string, caretIndex: number, range: number): void;
    close(code: number | undefined): Promise<void>;
    onClose(code: number, message: string): Promise<void>;
    private ping;
    onPong(data: Buffer): void;
}
