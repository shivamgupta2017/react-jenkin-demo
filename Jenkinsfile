pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh 'npm run build'
                echo 'first step completed'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run test'
                echo 'second step completed'
            }
        }
        stage('Deploy') { 
            steps {
                echo 'third step completed!'
            }
        }
    }
}