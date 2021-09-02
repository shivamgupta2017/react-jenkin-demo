pipeline {
    agent any
    parameters {
        string(name: 'PERSON', defaultValue: 'Mr Jenkins', description: 'Who should I say hello to?')

        text(name: 'BIOGRAPHY', defaultValue: '', description: 'Enter some information about the person')

        booleanParam(name: 'TOGGLE', defaultValue: true, description: 'Toggle this value')

        choice(name: 'CHOICE', choices: ['One', 'Two', 'Three'], description: 'Pick something')

        password(name: 'PASSWORD', defaultValue: 'SECRET', description: 'Enter a password')
        
        print "=================Please upload your property file here ====================="
        def inputFile = input message: 'Upload file', parameters: [file(name: 'global.properties')]
        // Read contents and write to workspace
        writeFile(file: 'global.properties', text: inputFile.readToString())
        // Stash it for use in a different part of the pipeline
        stash name: 'data', includes: 'global.properties'
    }
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
        // stage('Deploy') { 
        //     steps {
        //         sh 'pwd'
        //         sh '$WORKSPACE'
        //         sh 'aws s3 cp $WORKSPACE/build s3://sample-application-bucket-react --recursive --include "*"'
        //         echo 'third step completed!'
        //     }
        // }
    }
}
