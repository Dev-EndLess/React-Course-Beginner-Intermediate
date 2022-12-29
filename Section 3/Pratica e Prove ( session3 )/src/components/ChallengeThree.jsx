import React from "react";
import { useState } from "react";

function ChallengeThree() {
  /**
   * Challenge:
   * Mostra sul display h1 solamente se c'e' un messaggio non letto
   * 
   * Se la 1st condizione e' vera controlla anche la 2nd condizione
   * Se la 1st condizione e' falsa, la 2nd condizione non verra' controllata
   * 
   *
  * Challenge:
  * - Se non ci sono messaggi visualizza sul display "You're all caught up!"
  * - Se ci sono molteplici messaggi deve visualizzarsi sul
  *   display "You have <n> unread messaggi ( plurale)
  * - Se c'e' esattemente un messaggio deve visualizzarsi un messaggio (singolare)
  * 
  */

  const [messaggi, setMessaggi] = useState(['1','1'])

  return (
    <div className="">
      { messaggi.length === 0 ? <h3>Non ci sono messaggi da leggere</h3> :
      messaggi.length && <h3>{messaggi.length === 1 ? 'Ce' : 'Ci sono'} {messaggi.length} {messaggi.length === 1 ? 'Messaggio' : 'Messaggi'} da leggere</h3>}
    </div>
  ); 
}

export default ChallengeThree;
