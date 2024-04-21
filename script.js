// Fetch questions from the text file
fetch('personality_questions.txt')
    .then(response => response.text())
    .then(data => {
        // Split the data into an array of lines
        const questions = data.trim().split('\n');
        let currentIndex = 0;
        let personx = 1;
        let userResponses = '';

        // Display the first question
        displayQuestion(currentIndex, questions);
        
        // Function to display the current question
        function displayQuestion(index, questions) {
            const questionContainer = document.getElementById('question-container');
            questionContainer.innerHTML = `
                <p> Choose from 1 - Disagree to 5 - Agree
                <p>${questions[index]}</p>
                <label><input type="radio" name="option" value="1"> 1</label>
                <label><input type="radio" name="option" value="2"> 2</label>
                <label><input type="radio" name="option" value="3"> 3</label>
                <label><input type="radio" name="option" value="4"> 4</label>
                <label><input type="radio" name="option" value="5"> 5</label>
            `;
        }

        // Function to store the user's response
        function storeResponse(response) {
            userResponses += response;
        }

        // Function to proceed to the next question
        function nextQuestion() {
            // Get the selected option
            const selectedOption = document.querySelector('input[name="option"]:checked');
            if (!selectedOption) {
                alert('Please select an option.');
                return;
            }
            const response = selectedOption.value;
            storeResponse(response);

            // Proceed to the next question or end the quiz
            currentIndex++;
            if (currentIndex < questions.length) {
                displayQuestion(currentIndex, questions);
                
            } else {
                    
                // End of quiz, display the user's responses
                // document.getElementById('response').innerText = 'User Responses: ' + userResponses;
                if (personx == 1) {
                    currentIndex = -1;
                    personx = 2;
                    alert("Preson2");
                
                    
                }
                else {
                localStorage.setItem("personality_result", userResponses);

                
                var p1 = userResponses.substring(0, 50);
                var p2 = userResponses.substring(51);

                var score = 0;

                var sum1p1 = 20;
                var sum1p2 = 20;

                var sum2p1 = 14;
                var sum2p2 = 14;
                    
                var sum3p1 = 14;
                var sum3p2 = 14;
                    
                var sum4p1 = 38;
                var sum4p2 = 38;
                    
                var sum5p1 = 8;
                var sum5p2 = 8;
                    
                for (var i = 0; i < p2.length; i++) {
                    dp1 = parseInt(p1[i]);
                    dp2 = parseInt(p2[i]);

                    mod = i%10;

                    switch (mod) {
                        case 0:
                            sum5p1 -= dp1;
                            sum5p2 -= dp2;
                            break;
                        case 1:
                            sum1p1 += dp1;
                            sum1p2 += dp2;
                            break;
                        case 2:
                            sum2p1 -= dp1;
                            sum2p2 -= dp2;
                            break;
                        case 3:
                            sum3p1 += dp1;
                            sum3p2 += dp2;
                            break;
                        case 4:
                            sum4p1 -= dp1;
                            sum4p2 -= dp2;
                            break;
                        case 5:
                            sum5p1 += dp1;
                            sum5p2 += dp2;
                            break;
                        case 6:
                            sum1p1 -= dp1;
                            sum1p2 -= dp2;
                            break;
                        case 7:
                            sum2p1 += dp1;
                            sum2p2 += dp2;
                            break;
                        case 8:
                            sum3p1 -= dp1;
                            sum3p2 -= dp2;
                            break;
                        case 9:
                            sum4p1 += dp1;
                            sum4p2 += dp2;
                            break;
                    }
                }

                    // score = Math.abs(sum1p1-sum1p2) + Math.abs(sum2p1-sum2p2) + Math.abs(sum3p1-sum3p2) - Math.abs(sum4p1-sum4p2) + Math.abs(sum5p1-sum5p2)
                    // score = Math.trunc((score/5) / 40 * 100);
                    
                    
                document.getElementById('yesCount').textContent = sum4p1;
                    
                // window.location.href = "index.html";
                }
                }
            
        }
        document.getElementById('next-btn').addEventListener('click', nextQuestion);
    });
