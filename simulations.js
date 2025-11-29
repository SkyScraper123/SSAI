
document.addEventListener('DOMContentLoaded', () => {
    const simulations = [
      // Software
      { 
        id: 'sim-lang-translator', 
        title: 'Language Translator Simulator', 
        description: 'Visualize how Compilers and Interpreters process code.',
        category: 'software',
      },
      { 
        id: 'sim-sdlc-sorter', 
        title: 'SDLC Stage Sorter', 
        description: 'Drag and drop the Software Development Life Cycle stages into the correct order.',
        category: 'software',
      },
      { 
        id: 'sim-recursion-visualizer', 
        title: 'Recursion Call Stack Visualizer', 
        description: 'Watch the call stack grow and shrink when calculating a factorial.',
        category: 'software',
      },
      {
        id: 'sim-hospital-management',
        title: 'Hospital Management System',
        description: 'A simplified database simulation for managing patient records and appointments.',
        category: 'software',
      },
      {
        id: 'sim-ecommerce-rec',
        title: 'E-commerce Recommendation',
        description: 'See how adding items to a cart can trigger simple rule-based recommendations.',
        category: 'software',
      },
      {
        id: 'sim-banking-app',
        title: 'Secure Banking App',
        description: 'Simulates secure login and transactions, highlighting software security concepts.',
        category: 'software',
      },
      {
        id: 'sim-food-delivery',
        title: 'Food Delivery Tracker',
        description: 'Simulates the real-time status updates of a food delivery order.',
        category: 'software',
      },
      // Symbolic AI
      { 
        id: 'sim-logic-gates', 
        title: 'Logic Gate Simulator', 
        description: 'Experiment with basic logic gates, the building blocks of digital circuits.',
        category: 'symbolic-ai',
      },
      { 
        id: 'sim-expert-system', 
        title: 'Simple Expert System', 
        description: 'Diagnose a simple ailment based on symptoms using a set of IF-THEN rules.',
        category: 'symbolic-ai',
      },
      {
        id: 'sim-search-algo', 
        title: 'Search Algorithm Visualizer', 
        description: 'Visualize how BFS and DFS explore a maze.',
        category: 'symbolic-ai',
      },
      { 
        id: 'sim-legal-reasoning', 
        title: 'Legal Reasoning System', 
        description: 'Apply legal statutes as IF-THEN rules to determine voting eligibility.',
        category: 'symbolic-ai',
      },
      // Hybrid
      { 
        id: 'sim-fraud-detection', 
        title: 'Fraud Detection System', 
        description: 'A hybrid system that uses rules to detect suspicious bank transactions.',
        category: 'hybrid',
      },
    ];

    const simListContainer = document.getElementById('sim-list');
    const simContentContainer = document.getElementById('sim-content');
    let activeSimId = null;

    // --- Render Functions for Each Simulation ---
    const simRenderers = {
        'sim-lang-translator': renderLanguageTranslatorSim,
        'sim-sdlc-sorter': renderSdlcSorterSim,
        'sim-recursion-visualizer': renderRecursionVisualizerSim,
        'sim-hospital-management': renderHospitalManagementSim,
        'sim-ecommerce-rec': renderEcommerceSim,
        'sim-banking-app': renderBankingAppSim,
        'sim-food-delivery': renderFoodDeliverySim,
        'sim-logic-gates': renderLogicGateSim,
        'sim-expert-system': renderExpertSystemSim,
        'sim-search-algo': renderSearchAlgorithmVisualizer,
        'sim-legal-reasoning': renderLegalReasoningSim,
        'sim-fraud-detection': renderFraudDetectionSim,
    };

    function renderSimList() {
        simListContainer.innerHTML = ''; // Clear the list
        
        const categories = [
            { id: 'software', title: 'Software Case Studies' },
            { id: 'symbolic-ai', title: 'Symbolic AI Case Studies' },
            { id: 'hybrid', title: 'Hybrid System Case Studies' }
        ];

        categories.forEach(category => {
            const categorySims = simulations.filter(s => s.category === category.id);
            if (categorySims.length > 0) {
                const categoryHeader = document.createElement('h3');
                categoryHeader.textContent = category.title;
                simListContainer.appendChild(categoryHeader);
                categorySims.forEach(sim => createButton(sim));
            }
        });
    }

    function createButton(sim) {
        const button = document.createElement('button');
        button.className = 'list-button';
        button.textContent = sim.title;
        button.dataset.simId = sim.id;
        if (sim.id === activeSimId) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            activeSimId = sim.id;
            renderSimContent(sim);
            renderSimList();
        });
        simListContainer.appendChild(button);
    }

    function renderSimContent(sim) {
        if (!sim) {
            simContentContainer.innerHTML = `
                <div class="card">
                    <div class="card-content">
                        <p>Select a simulation from the list to begin.</p>
                    </div>
                </div>`;
            return;
        }

        let contentHTML = `
            <div class="card">
                <div class="card-header">
                    <h2>${sim.title}</h2>
                    <p>${sim.description}</p>
                </div>
                <div class="card-content" id="sim-interactive-area">
                    <!-- Specific sim content will be injected here -->
                </div>
                <div class="card-footer" id="sim-footer">
                    <!-- Footer buttons will be injected here -->
                </div>
            </div>`;
        simContentContainer.innerHTML = contentHTML;
        
        const renderer = simRenderers[sim.id];
        if(renderer) {
            renderer();
        } else {
             document.getElementById('sim-interactive-area').innerHTML = `<p>This simulation has not been implemented yet.</p>`;
        }
    }
    
    // --- INDIVIDUAL SIMULATION RENDERERS ---

    function renderLogicGateSim() {
        const simArea = document.getElementById('sim-interactive-area');
        simArea.innerHTML = `
            <div class="logic-gate-sim">
                <div class="gate-controls">
                    <div class="switch-container">
                        <label for="input-a">Input A</label>
                        <input type="checkbox" id="input-a" class="sim-input" />
                        <div class="led" id="led-a"></div>
                    </div>
                    <div class="switch-container" id="container-b">
                        <label for="input-b">Input B</label>
                        <input type="checkbox" id="input-b" class="sim-input" />
                        <div class="led" id="led-b"></div>
                    </div>
                </div>
                 <div class="gate-controls">
                    <select id="gate-select">
                        <option value="AND">AND</option>
                        <option value="OR">OR</option>
                        <option value="XOR">XOR</option>
                        <option value="NAND">NAND</option>
                        <option value="NOR">NOR</option>
                        <option value="NOT">NOT</option>
                    </select>
                </div>
                <div class="switch-container">
                    <p style="font-weight: bold;">Output</p>
                    <div class="led output-led" id="led-output"></div>
                </div>
            </div>`;

        const inputA = document.getElementById('input-a');
        const inputB = document.getElementById('input-b');
        const gateSelect = document.getElementById('gate-select');

        function updateLogicGate() {
            const a = inputA.checked;
            const b = inputB.checked;
            const gate = gateSelect.value;
            let output = false;

            document.getElementById('led-a').classList.toggle('on', a);
            document.getElementById('led-b').classList.toggle('on', b);
            document.getElementById('container-b').style.display = gate === 'NOT' ? 'none' : 'flex';

            switch (gate) {
                case 'AND': output = a && b; break;
                case 'OR': output = a || b; break;
                case 'XOR': output = a !== b; break;
                case 'NAND': output = !(a && b); break;
                case 'NOR': output = !(a || b); break;
                case 'NOT': output = !a; break;
            }

            document.getElementById('led-output').classList.toggle('on', output);
        }

        document.querySelectorAll('.sim-input, #gate-select').forEach(el => {
            el.addEventListener('change', updateLogicGate);
        });

        updateLogicGate(); // Initial calculation
    }
    
    function renderSdlcSorterSim() {
        const simArea = document.getElementById('sim-interactive-area');
        const simFooter = document.getElementById('sim-footer');
        const sdlcStages = ['Planning', 'Requirements', 'Design', 'Development', 'Testing', 'Deployment', 'Maintenance'];
        const shuffled = [...sdlcStages].sort(() => Math.random() - 0.5);

        simArea.innerHTML = `
            <div class="sdlc-container">
                <div>
                    <h3>Unplaced Stages</h3>
                    <div class="drag-zone" id="drag-zone"></div>
                </div>
                <div>
                    <h3>Correct Order</h3>
                    <div class="drop-zone" id="drop-zone"></div>
                </div>
            </div>
            <div id="result-message" class="result-message" style="display:none;"></div>
            `;
        
        simFooter.innerHTML = `
            <button id="check-order" class="button">Check Order</button>
            <button id="reset-order" class="button outline">Reset</button>
        `;

        const dragZone = document.getElementById('drag-zone');
        const dropZone = document.getElementById('drop-zone');
        
        function initializeSorter() {
            dragZone.innerHTML = '';
            dropZone.innerHTML = '';
            shuffled.forEach(stage => {
                const item = document.createElement('div');
                item.className = 'drag-item';
                item.textContent = stage;
                item.draggable = true;
                item.addEventListener('dragstart', e => {
                    e.dataTransfer.setData('text/plain', stage);
                    e.currentTarget.classList.add('dragging');
                });
                item.addEventListener('dragend', e => e.currentTarget.classList.remove('dragging'));
                dragZone.appendChild(item);
            });
            document.getElementById('result-message').style.display = 'none';
        }
        
        function setupDropListeners() {
            [dragZone, dropZone].forEach(zone => {
                 zone.addEventListener('dragover', e => {
                     e.preventDefault();
                     zone.classList.add('drag-over');
                 });
                 zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
                 zone.addEventListener('drop', e => {
                    e.preventDefault();
                    zone.classList.remove('drag-over');
                    const stage = e.dataTransfer.getData('text/plain');
                    const childToMove = Array.from(document.querySelectorAll('.drag-item')).find(c => c.textContent === stage);
                    if (childToMove) zone.appendChild(childToMove);
                });
            });
        }

        document.getElementById('check-order').addEventListener('click', () => {
            const placedOrder = Array.from(dropZone.children).map(child => child.textContent);
            const isCorrect = placedOrder.length === sdlcStages.length && placedOrder.every((item, i) => item === sdlcStages[i]);
            const resultMsg = document.getElementById('result-message');
            resultMsg.textContent = isCorrect ? "Perfect! You've mastered the SDLC flow." : "Not quite right. Some stages are in the wrong order.";
            resultMsg.className = `result-message ${isCorrect ? 'correct' : 'incorrect'}`;
            resultMsg.style.display = 'block';
        });

        document.getElementById('reset-order').addEventListener('click', initializeSorter);
        
        initializeSorter();
        setupDropListeners();
    }
    
    function renderLanguageTranslatorSim() {
        const simArea = document.getElementById('sim-interactive-area');
        const simFooter = document.getElementById('sim-footer');
        const code = `function greet() {
  let message = "Hello";
  console.log(message);
}`;
        const tokens = ['function', 'greet', '()', '{', 'let', 'message', '=', '"Hello"', ';', 'console.log(message)', ';', '}'];
        const compilerSteps = ['Tokenization', 'Parsing (AST)', 'Code Generation', 'Execution'];
        const interpreterSteps = ['Tokenize Line 1', 'Execute Line 1', 'Tokenize Line 2', 'Execute Line 2', 'Tokenize Line 3', 'Execute Line 3', 'Tokenize Line 4', 'Execute Line 4'];

        simArea.innerHTML = `
            <div class="lang-sim-controls">
                <button id="compiler-btn" class="button active">Compiler</button>
                <button id="interpreter-btn" class="button">Interpreter</button>
            </div>
            <div class="lang-sim-grid">
                <div>
                    <h3>Source Code</h3>
                    <pre class="code-block">${code}</pre>
                </div>
                <div>
                    <h3>Processing Steps</h3>
                    <div id="steps-list" class="steps-list"></div>
                </div>
                <div>
                    <h3>Internal State</h3>
                    <div id="internal-state" class="state-box">Awaiting execution...</div>
                </div>
                <div>
                    <h3>Final Output</h3>
                    <div id="final-output" class="output-box"></div>
                </div>
            </div>`;
            
        simFooter.innerHTML = `
            <button id="run-step" class="button">Run Step-by-Step</button>
            <button id="run-instant" class="button outline">Instant Run</button>
            <button id="reset-sim" class="button outline">Reset</button>
        `;
        
        let mode = 'compiler';
        let currentStep = 0;
        let isRunning = false;
        let intervalId = null;

        const stepsList = document.getElementById('steps-list');
        const internalState = document.getElementById('internal-state');
        const finalOutput = document.getElementById('final-output');

        const compilerBtn = document.getElementById('compiler-btn');
        const interpreterBtn = document.getElementById('interpreter-btn');
        
        const runStepBtn = document.getElementById('run-step');
        const runInstantBtn = document.getElementById('run-instant');
        const resetBtn = document.getElementById('reset-sim');
        
        function setMode(newMode) {
            mode = newMode;
            compilerBtn.classList.toggle('active', mode === 'compiler');
            interpreterBtn.classList.toggle('active', mode === 'interpreter');
            resetSim();
        }

        function resetSim() {
            clearInterval(intervalId);
            currentStep = 0;
            isRunning = false;
            internalState.innerHTML = 'Awaiting execution...';
            finalOutput.innerHTML = '';
            runStepBtn.disabled = false;
            runInstantBtn.disabled = false;
            updateStepsList();
        }

        function updateStepsList() {
            const steps = mode === 'compiler' ? compilerSteps : interpreterSteps;
            stepsList.innerHTML = '';
            steps.forEach((s, i) => {
                const stepEl = document.createElement('div');
                stepEl.className = 'step-item';
                if (currentStep > i) {
                   stepEl.classList.add('completed');
                }
                stepEl.innerHTML = `<span class="step-check">${currentStep > i ? '&#10003;' : ''}</span> ${s}`;
                stepsList.appendChild(stepEl);
            });
        }
        
        function runSimulation(instant) {
            resetSim();
            isRunning = true;
            runStepBtn.disabled = true;
            runInstantBtn.disabled = true;
            const steps = mode === 'compiler' ? compilerSteps : interpreterSteps;
            
            const stepAction = () => {
                if(currentStep >= steps.length) {
                    clearInterval(intervalId);
                    isRunning = false;
                    runStepBtn.disabled = false;
                    runInstantBtn.disabled = false;
                    return;
                }
                
                currentStep++;
                updateStepsList();
                
                if (mode === 'compiler') {
                    if (currentStep === 1) internalState.innerHTML = `<div class="token-grid">${tokens.map(t => `<span>${t}</span>`).join('')}</div>`;
                    if (currentStep === 2) internalState.textContent = 'Abstract Syntax Tree (AST) generated.';
                    if (currentStep === 3) internalState.textContent = 'Machine Code/Bytecode generated.';
                    if (currentStep === 4) finalOutput.innerHTML = '&gt; Hello';
                } else {
                     const line = Math.ceil(currentStep / 2);
                     if (currentStep % 2 !== 0) internalState.textContent = `Tokenizing line ${line}...`;
                     else internalState.textContent = `Executing line ${line}...`;
                     if(currentStep === 6) finalOutput.innerHTML = '&gt; Hello';
                }
            };
            
            if (instant) {
                while(currentStep < steps.length) stepAction();
            } else {
                intervalId = setInterval(stepAction, 1000);
            }
        }

        compilerBtn.addEventListener('click', () => setMode('compiler'));
        interpreterBtn.addEventListener('click', () => setMode('interpreter'));
        runStepBtn.addEventListener('click', () => runSimulation(false));
        runInstantBtn.addEventListener('click', () => runSimulation(true));
        resetBtn.addEventListener('click', resetSim);

        resetSim();
    }
    
    function renderRecursionVisualizerSim() {
         const simArea = document.getElementById('sim-interactive-area');
        const simFooter = document.getElementById('sim-footer');

        simArea.innerHTML = `
            <div class="flex items-center gap-4 mb-4">
                <label for="n-slider">n = <span id="n-value">3</span></label>
                <input type="range" id="n-slider" min="0" max="5" value="3" class="w-full">
            </div>
            <div class="lang-sim-grid">
                <pre class="code-block">
function factorial(n) {
  if (n === 0) {
    return 1; // Base Case
  } else {
    // Recursive Step
    return n * factorial(n - 1);
  }
}
                </pre>
                <div class="call-stack-container">
                    <h3>Call Stack</h3>
                    <div id="call-stack" class="call-stack"></div>
                </div>
            </div>`;
        
        simFooter.innerHTML = `
            <button id="run-recursion" class="button">Run factorial(3)</button>
            <button id="reset-recursion" class="button outline">Reset</button>`;

        const nSlider = document.getElementById('n-slider');
        const nValueSpan = document.getElementById('n-value');
        const runBtn = document.getElementById('run-recursion');
        const resetBtn = document.getElementById('reset-recursion');
        const callStackEl = document.getElementById('call-stack');
        let timeoutIds = [];

        function updateSlider() {
            const n = nSlider.value;
            nValueSpan.textContent = n;
            runBtn.textContent = `Run factorial(${n})`;
        }
        
        function clearTimeouts() {
            timeoutIds.forEach(clearTimeout);
            timeoutIds = [];
        }

        function reset() {
            clearTimeouts();
            callStackEl.innerHTML = '';
            runBtn.disabled = false;
            nSlider.disabled = false;
        }

        function run() {
            reset();
            const n = parseInt(nSlider.value);
            runBtn.disabled = true;
            nSlider.disabled = true;
            
            let idCounter = 0;

            function factorial(num) {
                const callId = idCounter++;
                const callDiv = document.createElement('div');
                callDiv.className = 'call-stack-item';
                callDiv.textContent = `call factorial(${num})`;
                callDiv.id = `call-${callId}`;
                
                let timeoutId = setTimeout(() => {
                    callStackEl.prepend(callDiv);
                }, callId * 1000);
                timeoutIds.push(timeoutId);

                return new Promise(resolve => {
                    if (num === 0) {
                        timeoutId = setTimeout(() => {
                            callDiv.textContent = `factorial(0) returns 1`;
                            callDiv.classList.add('returning');
                            resolve(1);
                        }, callId * 1000 + 500);
                        timeoutIds.push(timeoutId);
                    } else {
                        factorial(num - 1).then(subResult => {
                            const result = num * subResult;
                            timeoutId = setTimeout(() => {
                                callDiv.textContent = `factorial(${num}) returns ${result}`;
                                callDiv.classList.add('returning');
                                resolve(result);
                            }, callId * 1000 + 500);
                            timeoutIds.push(timeoutId);
                        });
                    }
                });
            }
            
            factorial(n).then(finalResult => {
                 let timeoutId = setTimeout(() => {
                    const finalDiv = document.createElement('div');
                    finalDiv.className = 'call-stack-item final-result';
                    finalDiv.textContent = `Final Result: ${finalResult}`;
                    callStackEl.innerHTML = '';
                    callStackEl.prepend(finalDiv);
                }, (idCounter + 1) * 1000);
                 timeoutIds.push(timeoutId);
                 
                 timeoutId = setTimeout(reset, (idCounter + 2) * 1000);
                 timeoutIds.push(timeoutId);
            });
        }
        
        nSlider.addEventListener('input', updateSlider);
        runBtn.addEventListener('click', run);
        resetBtn.addEventListener('click', reset);
    }

    function renderHospitalManagementSim() {
        const simArea = document.getElementById('sim-interactive-area');
        
        const db = {
            'P001': { id: 'P001', name: 'John Doe', appointment: '2024-11-10 10:00 AM', history: 'Annual check-up.' },
            'P002': { id: 'P002', name: 'Jane Smith', appointment: '2024-11-10 11:30 AM', history: 'Follow-up for flu.' },
        };
        let selectedPatientId = 'P001';

        function render() {
            let patientListHtml = Object.values(db).map(p => 
                `<button class="list-button ${p.id === selectedPatientId ? 'active' : ''}" data-id="${p.id}">${p.name} (${p.id})</button>`
            ).join('');

            let patientDetailsHtml = '<p>Select a patient to view details.</p>';
            if(db[selectedPatientId]) {
                const p = db[selectedPatientId];
                patientDetailsHtml = `
                    <p><strong>ID:</strong> ${p.id}</p>
                    <p><strong>Name:</strong> ${p.name}</p>
                    <p><strong>Appointment:</strong> ${p.appointment}</p>
                    <p><strong>History:</strong> ${p.history}</p>
                `;
            }
            
            simArea.innerHTML = `
                <div class="lang-sim-grid">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1rem;">
                            <h3>Patient Database</h3>
                            <button class="button outline small" id="add-new-btn">Add New</button>
                        </div>
                        <div id="patient-list">${patientListHtml}</div>
                    </div>
                    <div>
                        <h3>Patient Details</h3>
                        <div id="patient-details" class="state-box">
                           ${patientDetailsHtml}
                        </div>
                    </div>
                </div>
                <div id="add-patient-form" style="display:none; margin-top: 1rem;">
                    <h3>Add New Patient</h3>
                    <input type="text" id="new-name" placeholder="Patient Name" class="sim-input-text">
                    <input type="text" id="new-appt" placeholder="Appointment (e.g., 2024-12-25 02:00 PM)" class="sim-input-text">
                    <button id="save-patient-btn" class="button">Save Patient</button>
                </div>
            `;
            attachListeners();
        }

        function attachListeners() {
            document.querySelectorAll('#patient-list .list-button').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    selectedPatientId = e.target.dataset.id;
                    render();
                });
            });

            document.getElementById('add-new-btn').addEventListener('click', () => {
                document.getElementById('add-patient-form').style.display = 'block';
            });

            document.getElementById('save-patient-btn').addEventListener('click', () => {
                const name = document.getElementById('new-name').value;
                const appt = document.getElementById('new-appt').value;
                if (!name || !appt) return;
                
                const newId = `P${String(Object.keys(db).length + 1).padStart(3, '0')}`;
                db[newId] = { id: newId, name: name, appointment: appt, history: 'New patient registration.' };
                selectedPatientId = newId;
                document.getElementById('add-patient-form').style.display = 'none';
                document.getElementById('new-name').value = '';
                document.getElementById('new-appt').value = '';
                render();
            });
        }
        render();
    }
    
    function renderEcommerceSim() {
         const simArea = document.getElementById('sim-interactive-area');
         const simFooter = document.getElementById('sim-footer');
         const products = [
              { id: 'p1', name: 'Stylish Sneakers', price: 79.99, image: 'shoes.jpg', tags: ['footwear', 'style'] },
              { id: 'p2', name: 'Wireless Headphones', price: 129.99, image: 'headphones.jpg', tags: ['electronics', 'audio'] },
              { id: 'p3', name: 'Modern Backpack', price: 59.99, image: 'backpack.jpg', tags: ['accessory', 'style'] },
              { id: 'p4', name: 'Smart Watch', price: 199.99, image: 'watch.jpg', tags: ['electronics', 'accessory'] },
         ];
         let cart = [];
         
         function render() {
            let productsHtml = products.map(p => `
                <div class="product-card">
                    <img src="https://picsum.photos/seed/${p.id}/200/200" alt="${p.name}">
                    <h4>${p.name}</h4>
                    <p>$${p.price}</p>
                    <button class="button small add-to-cart-btn" data-id="${p.id}" ${cart.includes(p.id) ? 'disabled' : ''}>${cart.includes(p.id) ? 'In Cart' : 'Add to Cart'}</button>
                </div>
            `).join('');

            const lastAdded = cart.length > 0 ? products.find(p => p.id === cart[cart.length - 1]) : null;
            let recommendationsHtml = '';
            if (lastAdded) {
                const recs = products.filter(p => p.id !== lastAdded.id && !cart.includes(p.id) && p.tags.some(t => lastAdded.tags.includes(t)));
                if (recs.length > 0) {
                     recommendationsHtml = `
                        <h3>Recommended For You</h3>
                        <div class="product-grid">
                        ${recs.map(p => `
                            <div class="product-card rec">
                                <img src="https://picsum.photos/seed/${p.id}/200/200" alt="${p.name}">
                                <h4>${p.name}</h4>
                                <p>$${p.price}</p>
                                <button class="button small add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
                            </div>
                        `).join('')}
                        </div>`;
                }
            }

            simArea.innerHTML = `
                <h3>Products</h3>
                <div class="product-grid">${productsHtml}</div>
                <div id="recs" style="margin-top: 2rem;">${recommendationsHtml}</div>`;
                
            simFooter.innerHTML = `<p>Cart Items: ${cart.length}</p>`;
            
            attachListeners();
         }
         
         function attachListeners() {
             document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                 btn.addEventListener('click', e => {
                     const productId = e.target.dataset.id;
                     if (!cart.includes(productId)) {
                         cart.push(productId);
                         render();
                     }
                 });
             });
         }
         
         render();
    }
    
    function renderBankingAppSim() {
        const simArea = document.getElementById('sim-interactive-area');
        let loggedIn = false;
        let balance = 5430.25;

        function render() {
            if (!loggedIn) {
                simArea.innerHTML = `
                    <div class="banking-sim">
                        <h3>Secure Banking App</h3>
                        <input id="user" class="sim-input-text" type="text" value="user123">
                        <input id="pass" class="sim-input-text" type="password" value="password">
                        <div id="login-error" class="result-message incorrect" style="display:none;"></div>
                        <button id="login-btn" class="button">Log In</button>
                    </div>`;
            } else {
                simArea.innerHTML = `
                    <div class="banking-sim">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <h3>Welcome, user123!</h3>
                            <button id="logout-btn" class="button outline small">Logout</button>
                        </div>
                        <div class="balance-box">
                            <p>Available Balance</p>
                            <p class="balance-amount">$${balance.toLocaleString()}</p>
                        </div>
                        <div class="transfer-box">
                            <input id="transfer-amount" class="sim-input-text" type="number" placeholder="Transfer amount">
                            <button id="transfer-btn" class="button">Transfer</button>
                        </div>
                    </div>`;
            }
            attachListeners();
        }

        function attachListeners() {
            if (!loggedIn) {
                document.getElementById('login-btn').addEventListener('click', () => {
                    if (document.getElementById('user').value === 'user123' && document.getElementById('pass').value === 'password') {
                        loggedIn = true;
                        render();
                    } else {
                        const errorDiv = document.getElementById('login-error');
                        errorDiv.textContent = 'Invalid username or password.';
                        errorDiv.style.display = 'block';
                    }
                });
            } else {
                document.getElementById('logout-btn').addEventListener('click', () => {
                    loggedIn = false;
                    render();
                });
                document.getElementById('transfer-btn').addEventListener('click', () => {
                    const amount = parseFloat(document.getElementById('transfer-amount').value);
                    if (amount && amount > 0 && amount <= balance) {
                        balance -= amount;
                        render();
                    }
                });
            }
        }
        render();
    }
    
    function renderFoodDeliverySim() {
        const simArea = document.getElementById('sim-interactive-area');
        const simFooter = document.getElementById('sim-footer');
        const statuses = ['Order Placed', 'Restaurant is Preparing', 'Rider is on the way', 'Delivered'];
        let currentStatusIndex = 0;
        let isSimulating = false;
        
        function render() {
            simArea.innerHTML = `
                <h3>Your Order Status</h3>
                <div id="status-list" class="status-list">
                ${statuses.map((s, i) => `
                    <div class="status-item ${currentStatusIndex === i ? 'current' : currentStatusIndex > i ? 'completed' : ''}">
                        <div class="status-icon"></div>
                        <p>${s}</p>
                    </div>
                `).join('')}
                </div>`;
            simFooter.innerHTML = `<button id="order-btn" class="button" ${isSimulating ? 'disabled' : ''}>${isSimulating ? 'Tracking...' : 'Place New Order'}</button>`;
            attachListeners();
        }

        function attachListeners() {
            document.getElementById('order-btn').addEventListener('click', () => {
                if (isSimulating) return;
                isSimulating = true;
                currentStatusIndex = 0;
                render();

                const interval = setInterval(() => {
                    currentStatusIndex++;
                    render();
                    if(currentStatusIndex >= statuses.length -1) {
                        clearInterval(interval);
                        isSimulating = false;
                        // re-render footer
                        document.getElementById('order-btn').disabled = false;
                        document.getElementById('order-btn').textContent = 'Place New Order';
                    }
                }, 2000);
            });
        }
        render();
    }

    function renderExpertSystemSim() {
        const simArea = document.getElementById('sim-interactive-area');
        const simFooter = document.getElementById('sim-footer');
        const symptoms = { cough: 'Persistent Cough', fever: 'Fever', fatigue: 'Fatigue', headache: 'Headache' };
        const rules = [
            { diagnosis: 'Flu', conditions: ['cough', 'fever', 'fatigue'] },
            { diagnosis: 'Common Cold', conditions: ['cough', 'headache'] },
            { diagnosis: 'Migraine', conditions: ['headache', 'fatigue'] },
        ];
        
        simArea.innerHTML = `
            <div class="lang-sim-grid">
                <div>
                    <h3>Select Symptoms (Facts)</h3>
                    <div id="symptoms-checkboxes">
                    ${Object.entries(symptoms).map(([key, value]) => `
                        <label class="checkbox-label"><input type="checkbox" name="symptom" value="${key}"> ${value}</label>
                    `).join('')}
                    </div>
                </div>
                <div>
                    <h3>Diagnosis Result</h3>
                    <div id="diagnosis-result" class="state-box">No diagnosis yet.</div>
                </div>
            </div>`;
        simFooter.innerHTML = `<button id="run-diagnosis" class="button">Run Diagnosis</button>`;
        
        document.getElementById('run-diagnosis').addEventListener('click', () => {
            const selectedSymptoms = Array.from(document.querySelectorAll('input[name=symptom]:checked')).map(el => el.value);
            let diagnosis = 'Undetermined. Not enough information.';
            let explanation = '';

            for (const rule of rules) {
                if (rule.conditions.every(cond => selectedSymptoms.includes(cond))) {
                    diagnosis = rule.diagnosis;
                    explanation = `System matched: ${rule.conditions.join(', ')}.`;
                    break;
                }
            }
            document.getElementById('diagnosis-result').innerHTML = `<p style="font-weight:bold; font-size:1.5rem; color:var(--primary);">${diagnosis}</p><p>${explanation}</p>`;
        });
    }

    function renderSearchAlgorithmVisualizer() {
        const simArea = document.getElementById('sim-interactive-area');
        const simFooter = document.getElementById('sim-footer');
        const MAZE_SIZE = 11;
        const initialMaze = [
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0], [1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1], [0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        ];
        const START = { r: 0, c: 0 };
        const END = { r: 10, c: 10 };

        simArea.innerHTML = `
            <div class="search-algo-container">
                <div class="search-algo-controls">
                    <select id="algo-select" class="sim-input-text"><option value="bfs">Breadth-First Search</option><option value="dfs">Depth-First Search</option></select>
                </div>
                <div id="maze-grid" class="maze-grid" style="--size: ${MAZE_SIZE}"></div>
            </div>`;
        simFooter.innerHTML = `
            <button id="run-search" class="button">Run Simulation</button>
            <button id="reset-search" class="button outline">Reset</button>`;

        const mazeGrid = document.getElementById('maze-grid');

        function drawMaze(visited = [], path = []) {
            mazeGrid.innerHTML = '';
            for (let r = 0; r < MAZE_SIZE; r++) {
                for (let c = 0; c < MAZE_SIZE; c++) {
                    const cell = document.createElement('div');
                    cell.className = 'maze-cell';
                    if (initialMaze[r][c] === 1) cell.classList.add('wall');
                    if (r === START.r && c === START.c) cell.classList.add('start');
                    if (initialMaze[r][c] === 2) cell.classList.add('end');
                    if (path.some(p => p.r === r && p.c === c)) cell.classList.add('path');
                    else if (visited.some(v => v.r === r && v.c === c)) cell.classList.add('visited');
                    mazeGrid.appendChild(cell);
                }
            }
        }
        
        function run() {
            document.getElementById('run-search').disabled = true;
            const algo = document.getElementById('algo-select').value;
            let visitedOrder = [];
            let path = [];
            
            if (algo === 'bfs') {
                let queue = [[START]];
                let visitedSet = new Set([`${START.r}-${START.c}`]);
                while (queue.length > 0) {
                    let currentPath = queue.shift();
                    let { r, c } = currentPath[currentPath.length - 1];
                    visitedOrder.push({ r, c });
                    if (r === END.r && c === END.c) { path = currentPath; break; }
                    const neighbors = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]];
                    for (const [nr, nc] of neighbors) {
                        if (nr >= 0 && nr < MAZE_SIZE && nc >= 0 && nc < MAZE_SIZE && initialMaze[nr][nc] !== 1 && !visitedSet.has(`${nr}-${nc}`)) {
                            visitedSet.add(`${nr}-${nc}`);
                            queue.push([...currentPath, { r: nr, c: nc }]);
                        }
                    }
                }
            } else { // DFS
                 let stack = [[START]];
                 let visitedSet = new Set([`${START.r}-${START.c}`]);
                 while(stack.length > 0) {
                     let currentPath = stack.pop();
                     let { r, c } = currentPath[currentPath.length - 1];
                     visitedOrder.push({ r, c });
                     if (r === END.r && c === END.c) { path = currentPath; break; }
                     const neighbors = [[r + 1, c], [r, c + 1], [r - 1, c], [r, c - 1]]; // Adjusted order for more typical DFS look
                     for (const [nr, nc] of neighbors) {
                          if (nr >= 0 && nr < MAZE_SIZE && nc >= 0 && nc < MAZE_SIZE && initialMaze[nr][nc] !== 1 && !visitedSet.has(`${nr}-${nc}`)) {
                            visitedSet.add(`${nr}-${nc}`);
                            stack.push([...currentPath, { r: nr, c: nc }]);
                        }
                     }
                 }
            }

            let i = 0;
            const interval = setInterval(() => {
                if (i < visitedOrder.length) {
                    drawMaze(visitedOrder.slice(0, i + 1));
                    i++;
                } else {
                    drawMaze(visitedOrder, path);
                    clearInterval(interval);
                    document.getElementById('run-search').disabled = false;
                }
            }, 30);
        }
        
        document.getElementById('run-search').addEventListener('click', run);
        document.getElementById('reset-search').addEventListener('click', () => { drawMaze(); document.getElementById('run-search').disabled = false; });
        drawMaze();
    }
    
    function renderLegalReasoningSim() {
        const simArea = document.getElementById('sim-interactive-area');
        const simFooter = document.getElementById('sim-footer');
        simArea.innerHTML = `
             <div class="lang-sim-grid">
                <div>
                    <h3>Set the Facts</h3>
                    <label class="checkbox-label"><input type="checkbox" id="isCitizen"> Is a Citizen?</label>
                    <label class="checkbox-label"><input type="checkbox" id="isRegistered"> Is Registered to Vote?</label>
                    <div>
                        <label for="age">Age: <span id="age-val">17</span></label>
                        <input type="range" id="age" min="16" max="25" value="17" class="w-full">
                    </div>
                </div>
                <div>
                    <h3>Conclusion</h3>
                    <div id="legal-result" class="state-box">Click "Evaluate" to see the result.</div>
                </div>
            </div>`;
        simFooter.innerHTML = `<button id="evaluate-btn" class="button">Evaluate</button>`;
        
        document.getElementById('age').addEventListener('input', e => {
            document.getElementById('age-val').textContent = e.target.value;
        });

        document.getElementById('evaluate-btn').addEventListener('click', () => {
            const isCitizen = document.getElementById('isCitizen').checked;
            const isRegistered = document.getElementById('isRegistered').checked;
            const age = parseInt(document.getElementById('age').value);
            const resultEl = document.getElementById('legal-result');
            let explanation = [];
            
            if (!isCitizen) {
                explanation.push("FAIL: Person is NOT a citizen.");
            } else {
                 explanation.push("PASS: Person IS a citizen.");
            }
            if (age < 18) {
                explanation.push(`FAIL: Person is ${age}, which is less than 18.`);
            } else {
                explanation.push(`PASS: Person is ${age}, meeting the requirement.`);
            }
            if (!isRegistered) {
                explanation.push("FAIL: Person is NOT registered to vote.");
            } else {
                 explanation.push("PASS: Person IS registered to vote.");
            }

            const isEligible = isCitizen && age >= 18 && isRegistered;
            const conclusion = isEligible ? "Eligible to Vote" : "Ineligible to Vote";
            
            resultEl.innerHTML = `
                <p class="conclusion ${isEligible ? 'correct' : 'incorrect'}">${conclusion}</p>
                <ul>${explanation.map(line => `<li>${line}</li>`).join('')}</ul>
            `;
        });
    }

    function renderFraudDetectionSim() {
        const simArea = document.getElementById('sim-interactive-area');
        const simFooter = document.getElementById('sim-footer');
        const transactions = [
            { id: 1, amount: 50.25, location: 'Local', time: 'Normal' },
            { id: 2, amount: 6500.00, location: 'Local', time: 'Normal' },
            { id: 3, amount: 250.00, location: 'International', time: 'Normal' },
            { id: 4, amount: 300.50, location: 'International', time: 'Odd Hours' },
        ];
        
        simArea.innerHTML = `
            <h3>Incoming Transactions</h3>
            <div id="transactions-list">
            ${transactions.map(tx => `
                <div class="tx-item" id="tx-${tx.id}">
                    <div class="tx-details">
                        <p><strong>Amount:</strong> $${tx.amount.toFixed(2)}</p>
                        <p><strong>Location:</strong> ${tx.location}</p>
                        <p><strong>Time:</strong> ${tx.time}</p>
                    </div>
                    <div class="tx-result"></div>
                </div>
            `).join('')}
            </div>`;
        simFooter.innerHTML = `<button id="run-fraud" class="button">Run Fraud Detection</button>`;
        
        document.getElementById('run-fraud').addEventListener('click', () => {
            transactions.forEach(tx => {
                let reason = "Transaction appears normal.";
                let isFraud = false;
                if (tx.amount > 5000 && tx.location === 'Local') {
                    isFraud = true; reason = "Flagged: High amount for local transfer.";
                }
                if (tx.location === 'International' && tx.time === 'Odd Hours') {
                     isFraud = true; reason = "Flagged: International activity during odd hours.";
                }
                const resultEl = document.querySelector(`#tx-${tx.id} .tx-result`);
                resultEl.textContent = reason;
                resultEl.className = `tx-result ${isFraud ? 'incorrect' : 'correct'}`; // Swapped correct/incorrect for visual sense
            });
        });
    }

    // --- Initial Render ---
    renderSimList();
    renderSimContent(null);
});
