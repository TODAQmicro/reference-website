let
  pkgs = import <nixpkgs> {};
in
pkgs.mkShell {
  buildInputs = [
    pkgs.d2
    pkgs.docker
    pkgs.docker-slim
    pkgs.jq
    pkgs.nodejs-18_x
    pkgs.python311
  ];
}
