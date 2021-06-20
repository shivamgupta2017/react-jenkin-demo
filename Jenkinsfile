pipeline {
    agent any 
    stages {
        stage('Pre Build') {
            steps {
            sh 'npm install'
            echo 'npm installation is done'
            }
        }
        stage('Build') { 
            steps {
                sh 'CI=false && npm run build'
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
                sh 'pwd'
                sh 'aws s3 cp $WORKSPACE/build s3://sample-application-bucket-react --recursive --include "*"'
                echo 'third step completed!'
            }
        }
    }
}
