const statuscode = {
    //Informational range
    RF100: "The server has received the request headers and the client should proceed to send the request body",
    RF101: "The requester has asked the server to switch protocols and the server has agreed to do so",
    RF102: "A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.",
    RF103: "Checkpoint.",
    //Sucsess
    RF200: "",
    RF201: "",
    RF202: "",
    RF203: "",
    RF204: "",
    RF205: "",
    RF206: "",
    RF207: "",
    RF208: "",
    RF218: "This is fine.",
    RF226: "",
    //Redirection
    RF300: "",
    RF301: "",
    RF302: "",
    RF303: "",
    RF304: "",
    RF305: "",
    RF306: "",
    RF307: "",
    RF308: "",
    //User fucked up
    RF400: "Bad Request",
    RF401: "Unauthorized",
    RF402: "Payment Required",
    RF403: "Forbidden",
    RF404: "Not Found",
    RF405: "Method Not Allowed",
    RF406: "Not Acceptable, go back to programming class!",
    RF407: "Proxy Authentication Required (José doesn't count)",
    RF408: "Request Timeout",
    RF409: "Conflict (Of interest)",
    RF410: "Gone (Just like my will to write these codes)",
    RF411: "Length Required ( ͡° ͜ʖ ͡°)",
    RF412: "Precondition Failed (Opposed to the post condition)",
    RF413: "Payload Too Large (Try to making your own hacks next time)",
    RF414: "URI *Too Long* ( ͡° ͜ʖ ͡°)",
    RF415: "Unsupported Media Type (R.T.F.M)",
    RF416: "Range Not Satisfiable",
    RF417: "Expectation Failed (Just like everything else in my life)",
    RF418: "I'm a teapot",
    RF419: "I'm a coffee machine",
    RF421: "Misdirected Request (WHERE ARE THEY?!)",
    RF422: "Unprocessable Entity",
    RF423: "Locked",
    RF424: "Failed Dependency",
    RF425: "Too Early",
    RF426: "Upgrade Required (Get a new pc while you're at it)",
    RF428: "Precondition Required",
    RF429: "Too Many Requests (Go outside for a change, maybe some coffee...)",
    RF431: "Request Header Fields Too Large (Try hacking better.)",
    RF451: "Unavaibale due to Article 13. (Or other legal bullthist)",
    //Developer fucked up
    RF700: "can't quit vi",
    RF701: ''
}
module.exports.statuscode = statuscode;