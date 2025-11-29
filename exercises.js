
document.addEventListener('DOMContentLoaded', () => {
    const exercises = [
        // Fill in the Blanks
        { id: 'ex-prolog-fill', title: 'Prolog: Family Tree', type: 'fill-in-the-blanks', description: 'Complete the Prolog rules to define grandparent and sibling relationships.' },
        { id: 'ex-sql-fill', title: 'SQL Query: Select Users', type: 'fill-in-the-blanks', description: 'Complete the SQL query to select all users older than 30.' },
        { id: 'ex-fol-fill', title: 'First-Order Logic: Translation', type: 'fill-in-the-blanks', description: 'Translate the English sentence "Every person is mortal" into First-Order Logic.' },
        { id: 'ex-modus-ponens-fill', title: 'Modus Ponens: Deduction', type: 'fill-in-the-blanks', description: 'Given the premises P → Q and P, what can you logically deduce?' },
        { id: 'ex-frame-fill', title: 'Frame Representation: Restaurant', type: 'fill-in-the-blanks', description: 'Fill in the slots for a "Frame" representing a generic restaurant.' },
        // Drag and Drop
        { id: 'ex-sdlc-drag', title: 'SDLC: Correct Order', type: 'drag-and-drop', description: 'Drag and drop the Software Development Life Cycle stages into the correct order.' },
        { id: 'ex-oop-drag', title: 'OOP Concepts: Matching', type: 'drag-and-drop', description: 'Match the Object-Oriented Programming concepts to their definitions.' },
        { id: 'ex-software-types-drag', title: 'Software Types: Categorization', type: 'drag-and-drop', description: 'Categorize the following software examples.' },
        { id: 'ex-language-levels-drag', title: 'Language Levels: Hierarchy', type: 'drag-and-drop', description: 'Arrange these programming language types from lowest level to highest level.' },
        { id: 'ex-db-types-drag', title: 'Database Types: Matching', type: 'drag-and-drop', description: 'Match the database type to its description.' },
        { id: 'ex-recursion-code-drag', title: 'Recursion: Palindrome Code', type: 'drag-and-drop', description: 'Assemble the pieces of this recursive JavaScript function in the correct order.' },
        // Coding Challenge
        { id: 'ex-binary-code', title: 'Binary to Decimal Converter', type: 'coding-challenge', description: 'Write a JS function to convert a binary string into its decimal equivalent.' },
        { id: 'ex-factorial-code', title: 'Factorial: Iteration', type: 'coding-challenge', description: 'Write an iterative JS function to calculate the factorial of a number.' },
        { id: 'ex-api-fetch-code', title: 'Simple API Fetch', type: 'coding-challenge', description: 'Write a JS async function to fetch data from a mock API endpoint.' },
        { id: 'ex-palindrome-code', title: 'Palindrome Checker', type: 'coding-challenge', description: 'Write a non-recursive JS function to check if a string is a palindrome.' },
        // Logic Puzzle
        { id: 'ex-logic-gates-puzzle', title: 'Logic Gates: Inputs/Outputs', type: 'logic-puzzle', description: 'An AND gate outputs 0, and an OR gate outputs 1. What could the two inputs be?' },
        { id: 'ex-forward-chaining-puzzle', title: 'Forward Chaining: Deduction', type: 'logic-puzzle', description: 'Given facts and rules, what is the final fact you can deduce?' },
        { id: 'ex-semantic-net-puzzle', title: 'Semantic Network: Relationships', type: 'logic-puzzle', description: 'If a Canary "is-a" Bird, and a Bird "has-part" Wings, what can you infer?' },
        { id: 'ex-heuristics-puzzle', title: 'Heuristics: Best Path', type: 'logic-puzzle', description: 'Which path would a Greedy Best-First search choose?' },
        // Debugging
        { id: 'ex-debug-loop', title: 'Python: Off-by-One Error', type: 'debug-the-code', description: 'This Python code is supposed to print 1 to 5. Find and fix it.' },
        { id: 'ex-debug-js-logic', title: 'JavaScript: Faulty Logic', type: 'debug-the-code', description: 'This function should return "Admin" only for the admin role. Fix the logic.' },
        { id: 'ex-debug-sql-syntax', title: 'SQL: Syntax Error', type: 'debug-the-code', description: 'This SQL query has a syntax error. Find and fix it.' },
        { id: 'ex-debug-css-selector', title: 'CSS: Selector Specificity', type: 'debug-the-code', description: 'The button should be blue, but it is red. Fix the CSS selector.' },
        { id: 'ex-debug-react-state', title: 'React: Stale State', type: 'debug-the-code', description: 'Clicking the button should increment the count by 2, but only increments by 1. Fix the state update.' },
        // UI Redesign
        { id: 'ex-ui-redesign-login', title: 'Redesign a Login Form', type: 'ui-redesign', description: 'Identify the issues with the bad design, then see the improved version.' },
    ];

    const exerciseContentData = {
        'ex-prolog-fill': { type: 'fill-in-the-blanks', problem: { problem: [ { type: 'text', value: 'grandparent(GP, C) :- parent(GP, P),' }, { type: 'blank', id: 'blank1', answer: 'parent(P, C)' }, { type: 'text', value: '.' }, { type: 'text', value: '\n' }, { type: 'text', value: 'sibling(A, B) :- parent(P, A), parent(P, B),' }, { type: 'blank', id: 'blank2', answer: 'A \\= B' }, { type: 'text', value: '.' } ] } },
        'ex-sql-fill': { type: 'fill-in-the-blanks', problem: { problem: [ { type: 'text', value: 'SELECT' }, { type: 'blank', id: 'b1', answer: '*' }, { type: 'text', value: 'FROM' }, { type: 'blank', id: 'b2', answer: 'users' }, { type: 'text', value: 'WHERE' }, { type: 'blank', id: 'b3', answer: 'age > 30' }, { type: 'text', value: ';' } ] } },
        'ex-fol-fill': { type: 'fill-in-the-blanks', problem: { problem: [ { type: 'blank', id: 'b1', answer: '∀x' }, { type: 'text', value: '(Person(x) →' }, { type: 'blank', id: 'b2', answer: 'Mortal(x)' }, { type: 'text', value: ')' } ] } },
        'ex-modus-ponens-fill': { type: 'fill-in-the-blanks', problem: { problem: [ { type: 'text', value: 'Premise 1: P → Q\nPremise 2: P\nConclusion: ' }, { type: 'blank', id: 'b1', answer: 'Q' } ] } },
        'ex-frame-fill': { type: 'fill-in-the-blanks', problem: { problem: [ { type: 'text', value: 'Frame: Restaurant\n' }, { type: 'text', value: 'Cuisine: ' }, { type: 'blank', id: 'b1', answer: '[Type of Food]' }, { type: 'text', value: '\nPrice Range: '}, { type: 'blank', id: 'b2', answer: '[$, $$, $$$]' }, { type: 'text', value: '\nLocation: '}, { type: 'blank', id: 'b3', answer: '[Address]' } ] } },
        'ex-sdlc-drag': { type: 'drag-and-drop', problem: { items: ['Maintenance', 'Planning', 'Deployment', 'Requirements', 'Testing', 'Design', 'Development'], correctOrder: ['Planning', 'Requirements', 'Design', 'Development', 'Testing', 'Deployment', 'Maintenance'] } },
        'ex-oop-drag': { type: 'drag-and-drop', problem: { items: ['Encapsulation: Bundling data and the methods that operate on that data.', 'Inheritance: Creating new classes from existing ones.', 'Polymorphism: Treating objects of different classes as objects of a common superclass.'], correctOrder: ['Encapsulation: Bundling data and the methods that operate on that data.', 'Inheritance: Creating new classes from existing ones.', 'Polymorphism: Treating objects of different classes as objects of a common superclass.'] } },
        'ex-software-types-drag': { type: 'drag-and-drop', problem: { items: ['System Software: Operating System', 'Application Software: Web Browser', 'Programming Software: Compiler'], correctOrder: ['System Software: Operating System', 'Application Software: Web Browser', 'Programming Software: Compiler'] } },
        'ex-language-levels-drag': { type: 'drag-and-drop', problem: { items: ['Machine Code', 'Assembly Language', 'High-Level Language (e.g., Python)'], correctOrder: ['Machine Code', 'Assembly Language', 'High-Level Language (e.g., Python)'] } },
        'ex-db-types-drag': { type: 'drag-and-drop', problem: { items: ['Relational (SQL): Data stored in tables with rows and columns.', 'NoSQL: Flexible schema, includes document, key-value, and graph models.'], correctOrder: ['Relational (SQL): Data stored in tables with rows and columns.', 'NoSQL: Flexible schema, includes document, key-value, and graph models.'] } },
        'ex-recursion-code-drag': { type: 'drag-and-drop', problem: { items: [ 'return isPalindrome(cleaned.slice(1, -1));', 'if (cleaned.length <= 1) { return true; }', 'if (cleaned[0] === cleaned[cleaned.length - 1]) {', 'const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, \'\');', 'function isPalindrome(str) {', 'return false;', '}', '  }', '}', ], correctOrder: [ 'function isPalindrome(str) {', 'const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, \'\');', 'if (cleaned.length <= 1) { return true; }', 'if (cleaned[0] === cleaned[cleaned.length - 1]) {', 'return isPalindrome(cleaned.slice(1, -1));', '  }', 'return false;', '}', '}', ] } },
        'ex-binary-code': { type: 'coding-challenge', problem: { template: `function binaryToDecimal(binary) {\n  // Your code here\n  return parseInt(binary, 2);\n}`, tests: [{input: "'101'", output: 5}, {input: "'1111'", output: 15}, {input: "'10000'", output: 16}] } },
        'ex-factorial-code': { type: 'coding-challenge', problem: { template: `function factorial(n) {\n  let result = 1;\n  for (let i = n; i > 1; i--) {\n    result *= i;\n  }\n  return result;\n}`, tests: [{input: 5, output: 120}, {input: 0, output: 1}, {input: 1, output: 1}] } },
        'ex-api-fetch-code': { type: 'coding-challenge', problem: { template: `async function fetchData(url) {\n  // This is a fake fetch for testing purposes\n  const fakeFetch = (url) => Promise.resolve({ json: () => Promise.resolve({ data: 'Mock Data' }) });\n\n  const response = await fakeFetch(url);\n  const data = await response.json();\n  return data;\n}`, tests: [{input: "'https://api.example.com/data'", output: {data: 'Mock Data'}}] } },
        'ex-palindrome-code': { type: 'coding-challenge', problem: { template: `function isPalindrome(str) {\n  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  const reversed = cleaned.split('').reverse().join('');\n  return cleaned === reversed;\n}`, tests: [{input: "'A man, a plan, a canal: Panama'", output: true}, {input: "'race a car'", output: false}] } },
        'ex-logic-gates-puzzle': { type: 'logic-puzzle', problem: { question: 'Inputs A and B can be either 0 (false) or 1 (true). Given the outputs, determine the values of A and B.', options: ['A=0, B=0', 'A=1, B=1', 'A=1, B=0'], answer: ['A=1, B=0'] } },
        'ex-forward-chaining-puzzle': { type: 'logic-puzzle', problem: { question: 'Start with facts A and B. Apply the rules sequentially.', options: ['A', 'B', 'C', 'D'], answer: ['D'] } },
        'ex-semantic-net-puzzle': { type: 'logic-puzzle', problem: { question: 'Based on the network, what is true about a Canary?', options: ['A Canary has-part Wings', 'A Bird is-a Canary', 'Wings have-part a Bird'], answer: ['A Canary has-part Wings'] } },
        'ex-heuristics-puzzle': { type: 'logic-puzzle', problem: { question: 'Which path is chosen next?', options: ['Path A (h=10)', 'Path B (h=5)', 'Either one, it is random'], answer: ['Path B (h=5)'] } },
        'ex-debug-loop': { type: 'debug-the-code', problem: { buggyCode: `for i in range(1, 5):\n  print(i)`, solution: `for i in range(1, 6):\n  print(i)` } },
        'ex-debug-js-logic': { type: 'debug-the-code', problem: { buggyCode: `function checkRole(role) {\n  if (role = "admin") {\n    return "Admin";\n  }\n  return "User";\n}`, solution: `function checkRole(role) {\n  if (role === "admin") {\n    return "Admin";\n  }\n  return "User";\n}` } },
        'ex-debug-sql-syntax': { type: 'debug-the-code', problem: { buggyCode: `SELECT ALL FROM products;`, solution: `SELECT * FROM products;` } },
        'ex-debug-css-selector': { type: 'debug-the-code', problem: { buggyCode: `/* HTML: <button class="btn primary">Click</button> */\nbutton {\n  background-color: red;\n}\n.primary {\n  background-color: blue;\n}`, solution: `/* HTML: <button class="btn primary">Click</button> */\n.btn.primary {\n  background-color: blue;\n}` } },
        'ex-debug-react-state': { type: 'debug-the-code', problem: { buggyCode: `function Counter() {\n  const [count, setCount] = useState(0);\n  function handleClick() {\n    setCount(count + 1);\n    setCount(count + 1);\n  }\n  return <button>{count}</button>;\n}`, solution: `function Counter() {\n  const [count, setCount] = useState(0);\n  function handleClick() {\n    setCount(c => c + 1);\n    setCount(c => c + 1);\n  }\n  return <button>{count}</button>;\n}` } },
        'ex-ui-redesign-login': { type: 'ui-redesign', problem: { questions: [ {id: 'q1', text: 'Poor color contrast.'}, {id: 'q2', text: 'Unclear labels.'}, {id: 'q3', text: 'Inconsistent capitalization.'}, {id: 'q4', text: 'Button purpose unclear.'} ] } }
    };
    
    const exListContainer = document.getElementById('ex-list');
    const exContentContainer = document.getElementById('ex-content');
    let activeExId = null;

    const exRenderers = {
        'fill-in-the-blanks': renderFillInTheBlanks,
        'drag-and-drop': renderDragAndDrop,
        'coding-challenge': renderCodingChallenge,
        'logic-puzzle': renderLogicPuzzle,
        'debug-the-code': renderDebugTheCode,
        'ui-redesign': renderUiRedesign,
    };

    function handleExerciseClick(exId) {
        // Update active state
        activeExId = exId;
        const allButtons = document.querySelectorAll('#ex-list .list-button');
        allButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.exId === activeExId);
        });

        // Find exercise data
        const summary = exercises.find(e => e.id === exId);
        const content = exerciseContentData[exId];

        if (!summary || !content) {
            exContentContainer.innerHTML = `<div class="card"><div class="card-content"><p>Error: Could not find content for exercise ID: ${exId}.</p></div></div>`;
            return;
        }

        // Render the content area
        exContentContainer.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h2>${summary.title}</h2>
                    <p>${summary.description || ''}</p>
                </div>
                <div class="card-content" id="ex-interactive-area"></div>
                <div class="card-footer" id="ex-footer"></div>
            </div>`;
        
        // Call the specific renderer for the exercise type
        const renderer = exRenderers[summary.type];
        if (renderer && content.problem) {
            renderer(content.problem);
        } else {
            document.getElementById('ex-interactive-area').innerHTML = `<p>This exercise has not been implemented yet.</p>`;
        }
    }

    function renderExList() {
        exListContainer.innerHTML = '';
        const types = [...new Set(exercises.map(ex => ex.type))];
        
        types.forEach(type => {
            const typeName = type.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
            const header = document.createElement('h3');
            header.textContent = typeName;
            exListContainer.appendChild(header);

            const exercisesForType = exercises.filter(ex => ex.type === type);
            exercisesForType.forEach(ex => {
                const button = document.createElement('button');
                button.className = 'list-button';
                button.textContent = ex.title;
                button.dataset.exId = ex.id;
                button.addEventListener('click', () => handleExerciseClick(ex.id));
                exListContainer.appendChild(button);
            });
        });
    }

    function renderInitialContent() {
        exContentContainer.innerHTML = `<div class="card"><div class="card-content"><p>Select an exercise from the list to begin.</p></div></div>`;
    }
    
    // --- GENERIC RENDERERS ---

    function renderFillInTheBlanks(exProblem) {
        const exArea = document.getElementById('ex-interactive-area');
        const exFooter = document.getElementById('ex-footer');
        let problemHtml = '';
        exProblem.problem.forEach(part => {
            if (part.type === 'text') {
                problemHtml += part.value.replace(/\n/g, '<br>');
            } else if (part.type === 'blank') {
                problemHtml += ` <input type="text" class="blank-input" name="${part.id}" data-answer="${part.answer}"> `;
            }
        });
        exArea.innerHTML = `<div class="code-block">${problemHtml}</div><div id="result-message" class="result-message" style="display:none;"></div>`;
        exFooter.innerHTML = `<button id="check-btn" class="button">Check Answers</button>`;

        document.getElementById('check-btn').addEventListener('click', () => {
            let allCorrect = true;
            document.querySelectorAll('.blank-input').forEach(input => {
                const isCorrect = input.value.trim().toLowerCase() === input.dataset.answer.trim().toLowerCase();
                input.classList.toggle('correct', isCorrect);
                input.classList.toggle('incorrect', !isCorrect);
                if (!isCorrect) allCorrect = false;
            });
            const resultMsg = document.getElementById('result-message');
            resultMsg.textContent = allCorrect ? 'Great job!' : 'Some answers are incorrect.';
            resultMsg.className = `result-message ${allCorrect ? 'correct' : 'incorrect'}`;
            resultMsg.style.display = 'block';
        });
    }

    function renderDragAndDrop(exProblem) {
        const exArea = document.getElementById('ex-interactive-area');
        const exFooter = document.getElementById('ex-footer');
        const shuffled = [...exProblem.items].sort(() => Math.random() - 0.5);

        exArea.innerHTML = `
            <div class="sdlc-container">
                <div>
                    <h3>Unplaced Items</h3>
                    <div class="drag-zone" id="drag-zone"></div>
                </div>
                <div>
                    <h3>Your Order</h3>
                    <div class="drop-zone" id="drop-zone"></div>
                </div>
            </div>
            <div id="result-message" class="result-message" style="display:none;"></div>`;
        exFooter.innerHTML = `<button id="check-btn" class="button">Check Order</button><button id="reset-btn" class="button outline">Reset</button>`;

        const dragZone = document.getElementById('drag-zone');
        const dropZone = document.getElementById('drop-zone');
        
        function initialize() {
            dragZone.innerHTML = '';
            dropZone.innerHTML = '';
            shuffled.forEach(itemText => {
                const item = document.createElement('div');
                item.className = 'drag-item';
                item.textContent = itemText;
                item.draggable = true;
                item.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', itemText));
                dragZone.appendChild(item);
            });
            document.getElementById('result-message').style.display = 'none';
             Array.from(dropZone.children).forEach(child => child.classList.remove('correct', 'incorrect'));
        }
        
        [dragZone, dropZone].forEach(zone => {
             zone.addEventListener('dragover', e => e.preventDefault());
             zone.addEventListener('drop', e => {
                e.preventDefault();
                const itemText = e.dataTransfer.getData('text/plain');
                const allItems = [...document.querySelectorAll('.drag-item')];
                const draggedItem = allItems.find(c => c.textContent === itemText);
                if(draggedItem) zone.appendChild(draggedItem);
            });
        });

        document.getElementById('check-btn').addEventListener('click', () => {
            const placedItems = Array.from(dropZone.children);
            let allCorrect = placedItems.length === exProblem.correctOrder.length;
            placedItems.forEach((item, i) => {
                const isCorrect = item.textContent === exProblem.correctOrder[i];
                item.classList.add(isCorrect ? 'correct' : 'incorrect');
                if(!isCorrect) allCorrect = false;
            });

            const resultMsg = document.getElementById('result-message');
            resultMsg.textContent = allCorrect ? "Correct!" : "Not quite right. Try again.";
            resultMsg.className = `result-message ${allCorrect ? 'correct' : 'incorrect'}`;
            resultMsg.style.display = 'block';
        });

        document.getElementById('reset-btn').addEventListener('click', initialize);
        initialize();
    }

    function renderCodingChallenge(exProblem) {
        const exArea = document.getElementById('ex-interactive-area');
        const exFooter = document.getElementById('ex-footer');
        exArea.innerHTML = `<textarea id="code-area" class="code-textarea" rows="10"></textarea><div id="test-results"></div>`;
        exFooter.innerHTML = `<button id="run-tests-btn" class="button">Run Tests</button>`;
        const codeArea = document.getElementById('code-area');
        codeArea.value = exProblem.template;
        
        document.getElementById('run-tests-btn').addEventListener('click', () => {
            const userCode = codeArea.value;
            const resultsArea = document.getElementById('test-results');
            resultsArea.innerHTML = '<h3>Results</h3>';
            try {
                // eslint-disable-next-line
                const userFunc = new Function('return ' + userCode)();
                exProblem.tests.forEach(test => {
                    const resultEl = document.createElement('div');
                    resultEl.className = 'result-message';
                    try {
                        // eslint-disable-next-line
                        const userResult = userFunc(eval(test.input));
                        const passed = JSON.stringify(userResult) === JSON.stringify(test.output);
                        resultEl.classList.add(passed ? 'correct' : 'incorrect');
                        resultEl.innerHTML = `Input: ${test.input} | Expected: ${JSON.stringify(test.output)} | Got: ${JSON.stringify(userResult)} -> ${passed ? 'PASS' : 'FAIL'}`;
                    } catch (e) {
                         resultEl.className = 'result-message incorrect';
                         resultEl.textContent = `Test failed with error: ${e.message}`;
                    }
                    resultsArea.appendChild(resultEl);
                });
            } catch (e) {
                resultsArea.innerHTML += `<div class="result-message incorrect">Could not execute code: ${e.message}</div>`;
            }
        });
    }
    
    function renderLogicPuzzle(exProblem) {
        const exArea = document.getElementById('ex-interactive-area');
        const exFooter = document.getElementById('ex-footer');
        exArea.innerHTML = `
            <p>${exProblem.question}</p>
            <div id="options-container" class="options-container">
            ${exProblem.options.map((opt) => `<label class="radio-label"><input type="radio" name="logic-puzzle" value="${opt}"> ${opt}</label>`).join('')}
            </div>
            <div id="result-message" class="result-message" style="display:none;"></div>`;
        exFooter.innerHTML = `<button id="check-btn" class="button">Check Answer</button>`;

        document.getElementById('check-btn').addEventListener('click', () => {
            const selected = document.querySelector('input[name="logic-puzzle"]:checked');
            if (!selected) return;
            const isCorrect = exProblem.answer.includes(selected.value);
            const resultMsg = document.getElementById('result-message');
            resultMsg.textContent = isCorrect ? 'Correct!' : `Not quite. The correct answer is ${exProblem.answer.join(' or ')}.`;
            resultMsg.className = `result-message ${isCorrect ? 'correct' : 'incorrect'}`;
            resultMsg.style.display = 'block';
        });
    }

    function renderDebugTheCode(exProblem) {
        const exArea = document.getElementById('ex-interactive-area');
        const exFooter = document.getElementById('ex-footer');
        exArea.innerHTML = `<textarea id="code-area" class="code-textarea" rows="8"></textarea><div id="result-message" class="result-message" style="display:none;"></div>`;
        exFooter.innerHTML = `<button id="check-btn" class="button">Check My Fix</button><button id="solution-btn" class="button outline">Show Solution</button>`;
        const codeArea = document.getElementById('code-area');
        codeArea.value = exProblem.buggyCode;
        
        document.getElementById('check-btn').addEventListener('click', () => {
            const userCode = codeArea.value.replace(/\s/g, '');
            const solutionCode = exProblem.solution.replace(/\s/g, '');
            const isCorrect = userCode === solutionCode;
            const resultMsg = document.getElementById('result-message');
            resultMsg.textContent = isCorrect ? 'Correct! You fixed it.' : 'Not quite. Keep trying!';
            resultMsg.className = `result-message ${isCorrect ? 'correct' : 'incorrect'}`;
            resultMsg.style.display = 'block';
        });
        document.getElementById('solution-btn').addEventListener('click', () => codeArea.value = exProblem.solution);
    }
    
    function renderUiRedesign(exProblem) {
        const exArea = document.getElementById('ex-interactive-area');
        const exFooter = document.getElementById('ex-footer');
        exArea.innerHTML = `
            <div id="ui-container" class="lang-sim-grid">
                <div class="ui-design-card bad">
                    <h3>Poor UI/UX Example</h3>
                    <div class="fake-form bad-form">
                        <label>username</label>
                        <input type="text" />
                        <label>password</label>
                        <input type="password" />
                        <button>submit</button>
                    </div>
                </div>
                <div id="ui-right-panel">
                    <h3>Identify the UI/UX Issues</h3>
                    <div id="quiz-questions">
                        ${exProblem.questions.map(q => `<label class="checkbox-label"><input type="checkbox" name="ui-issue" value="${q.id}"> ${q.text}</label>`).join('')}
                    </div>
                </div>
            </div>`;
        exFooter.innerHTML = `<button id="check-btn" class="button">Check Answers & See Solution</button>`;
        
        document.getElementById('check-btn').addEventListener('click', () => {
            const rightPanel = document.getElementById('ui-right-panel');
            rightPanel.innerHTML = `
                <div class="ui-design-card good">
                    <h3>Good UI/UX Example</h3>
                    <div class="fake-form good-form">
                        <label for="good-user">Username</label>
                        <input id="good-user" type="text" placeholder="Enter your username" />
                        <label for="good-pass">Password</label>
                        <input id="good-pass" type="password" placeholder="Enter your password" />
                        <button class="button">Sign In</button>
                    </div>
                </div>`;
            exFooter.innerHTML = '';
        });
    }

    // --- Initial Render ---
    renderExList();
    renderInitialContent();
});

    