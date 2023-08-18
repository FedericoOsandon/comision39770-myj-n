- docker build -t usercreator .

- docker login -> loguearnos desde terminal en docker hub

- docker tag usercreator <username>/usercreator:1.0.0

- docker push <username>/usercreator:1.0.0
<!-- instalar kubectl -->
- curl.exe -LO https://dl.k8s.io/release/v1.25.0/bin/windows/amd64/kubectl.exe

<!-- Probar si tenemos kubectl instalado -->
- kubectl version --short (deprecado --short)

- minikube start

- kubectl apply -f kubeusers.yaml
- kubectl get deployments 
- kubectl get pods
- kubectl get services
- minikube service list
- minikube service kubeservice39770