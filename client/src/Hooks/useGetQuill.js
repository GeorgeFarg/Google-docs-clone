import { useState } from "react";

export default function (source) {
    const [delta, setDelta] = useState();

    if (source != 'user') return;
    
    return [delta, setDelta];
}