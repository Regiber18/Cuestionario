import { defaultEquals } from "./util"
import { Node } from  "../data/Node"; 

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
    this.count = 0; 
    this.head = undefined;
    this.equalsFn = equalsFn;
    }
     pushElement(alumn) {
        const node = new Node(alumn); 
        let current; 
        if (this.head == null) { 
        this.head = node;
        } else {
        current = this.head;
        while (current.next != null) {
        current = current.next;
        }
        current.next = node; 
        }
        this.count++; 
    }

    isEmpty() {
        return this.count === 0; 
    }

    print() {
        if(this.isEmpty()) {
            alert("is empty")
        }else {
          let current = this.head;
          let listvalues = ""
         while (current) {
            listvalues += 'el alumno es ${current.value}'
            current = current.next;
        }  
        }

        
       }

    }
    

    
 


