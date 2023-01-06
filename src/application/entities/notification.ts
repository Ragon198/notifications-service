import { randomUUID } from "crypto";
import { Replace } from "src/helpers/Replace";
import { Content } from "./content";

export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    canceledAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private _id: string;
    private props: NotificationProps;

    constructor(props: Replace<NotificationProps, { createdAt?: Date }>, id?: string) {
        this._id = id ?? randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        };
    }

    public get id() {
        return this._id;
    }
    
    public get recipientId(): string {
        return this.props.recipientId;
    }
    public set recipientId(value: string) {
        this.props.recipientId = value;
    }

    public get content() : Content {
        return this.props.content;
    }

    public set content(content: Content) {
        this.props.content = content;
    }
    
    public get category(): string {
        return this.props.category;
    }
    public set category(value: string) {
        this.props.category = value;
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }
    public read() {
        this.props.readAt = new Date();
    }
    public unread() {
        this.props.readAt = null;
    }

    public cancel() {
        this.props.canceledAt = new Date();
    }
    public get canceledAt(): Date | null | undefined {
        return this.props.canceledAt;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }
}