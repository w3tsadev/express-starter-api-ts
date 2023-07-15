import MessageResponse from "./MessageResponse";

export default interface ErrorMessage extends MessageResponse {
  stack?: string;
}
